import React from 'react';

const SearchKeyword = props =>
 (
                               
              <>
                  <h5>Kata kunci</h5>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='form-row'>
                        <div className='col-10'>
                          <input className='form-control' 
                          type="text" 
                          placeholder='Ketikkan kata kunci yaitu: nama restoran, lokasi, masakan, dll.'
                          value={props.keyword}
                          onChange={props.changeKeywordHandler} />
                        </div>
                        <div className='col'> 
                          <button className='btn btn-primary' 
                          text='button'
                          onClick={props.onClickAddToCriteria}
                          >
                          Add to criteria
                          </button>
                        </div>
                     </div>
                    </div>
                  </div>
              </>
                
 )

export default SearchKeyword;