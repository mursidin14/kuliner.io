import React from 'react';
import RatingLable from '../components/RatingLable';

const Review = (props) => (
    <div className='card border-success' style={{marginBottom: 5}}>
    <div className='card-body'>
        <div className='row' style={{marginBottom: 20}}>
            <div className='col-1' style={{border: '0px solid black'}}>
                <img className='img-responsive' src={props.review.user.profile_image} alt="" style={{borderRadius: '50%', width: 80}}/>
            </div>
            <div className='col-11' style={{border: '0px solid black'}}>
                <h6 className='font-weight-bold'>{props.review.user.name}</h6>
                <RatingLable
                    text={`${props.review.user.foodie_level_num} (${props.review.user.foodie_level})`}
                    labelColor={`${props.review.user.foodie_color}`}
                />
            </div>
        </div>
        <div>
           <h6 className='card-text text-muted'>{props.review.review_time_friend}</h6>
        <RatingLable
          text={`${props.review.rating} (${props.review.rating_text})`}
          labelColor={`${props.review.rating_color}`}  
        />
        <p className='text-muted'>{props.review.review_text}</p>
    </div>
    </div>
</div>
)

export default Review;