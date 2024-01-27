// Movie.js
import React, { Component } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './reviewForm';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  handleReviewSubmit = (reviewText) => {
    // Update the reviews array in the state
    this.setState((prevState) => ({ reviews: [...prevState.reviews, reviewText] }));
  };

  render() {
    const { title, image, synopsis } = this.props;
    const { reviews } = this.state;

    return (
      <div className="container mw-xl mx-auto ph-80 text-center">
        <br />
        <h2 className='d-block text.uppercase text-secondary mb-6'>{title}</h2>
        <img src={image} alt={title} className="img-fluid w-50" />
        <p className="lead">{synopsis}</p>

        <div className="mb-3">
          <Stars />
        </div>

        <div className="mb-3">
          <ReviewList reviews={reviews} />
        </div>
        <div>
          
          <ReviewForm onReviewSubmit={this.handleReviewSubmit} />
        </div>
      </div>
    );
  }
}
export default Movie;
