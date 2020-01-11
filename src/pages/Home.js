import React, { Component } from 'react';
import Image from '../components/Image';
import CityList from '../components/CityList';
import SearchCity from '../components/SearchCity';
import axios from 'axios';
import {API} from '../config/API';


class Home extends Component
{
    constructor()
        {
          super();
          this.state =
            {
              FeaturedCities: null,
              keyword: '',
              citiesResultSearch: null,
              cityKeywordSearch: '',
            };
        }
        changeKeywordHandler = (event) => 
          {
            this.setState ({keyword: event.target.value});
          }

        SearchHandler = () => 
          {
              let keyword = this.state.keyword;
              var url = `${API.zomato.baseUrl}/cities`
              axios
              .get(url, {
                headers: {
                  'user-key' : API.zomato.key_api
                },
                params: {
                    q: keyword
                }
              })
          .then(({ data }) => {
            
            this.setState({ citiesResultSearch: data.location_suggestions, 
              keyword: '', 
              cityKeywordSearch: keyword })
          })
          .catch(err => console.log(err));
            
          }

        getFeaturedCities = () =>
          {
            var url = `${API.zomato.baseUrl}/cities`
            axios
            .get(url, {
              headers: {
                'user-key' : API.zomato.key_api
              },
              params: {
                city_ids: '74,11052,170'
              }
            })
        .then(({ data }) => {  
          
          this.setState({ FeaturedCities: data.location_suggestions })
        })
        .catch(err => console.log(err));
          }
        componentDidMount () {
          this.getFeaturedCities();
        } 
        render ()
        {  
            return (
                        
            <>
           
            <Image />
            <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
                <SearchCity 
                value={this.state.keyword}
                onChange={this.changeKeywordHandler}
                onClickSearch={this.SearchHandler}
                />

                <CityList
                cities={ this.state.FeaturedCities }
                title={ 'Kota unggulan' } />
                {
              this.state.cityKeywordSearch !=='' && (
                <CityList 
                cities={ this.state.citiesResultSearch }
                title={ 'pencarian kota' }
                showSubtitle={true}
                subtitle={this.state.cityKeywordSearch} />
              )
                }

            </div>
            
            </>

            )
        }
}

export default Home;