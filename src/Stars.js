// Stars.js
import React, { Component } from 'react';

class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  handleRatingChange = (newRating) => {
    this.setState({ rating: newRating });
  };

  render() {
    const { rating } = this.state;

    // Render stars based on the current rating
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        onClick={() => this.handleRatingChange(index + 1)}
        style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
      >
        &#9733; {/* Star Unicode Character */}
      </span>
    ));

    return <div>{stars}</div>;
  }
}

export default Stars;
