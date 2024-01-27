// ReviewForm.js
import React, { Component } from 'react';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewText: ''
    };
  }

  handleReviewChange = (event) => {
    this.setState({ reviewText: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { onReviewSubmit } = this.props;
    const { reviewText } = this.state;

    // Pass the review text to the parent component
    onReviewSubmit(reviewText);

    // Clear the review text in the form
    this.setState({ reviewText: '' });
  };

  render() {
    const { reviewText } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <textarea
            className="form-control"
            value={reviewText}
            onChange={this.handleReviewChange}
            placeholder="Leave a review..."
            rows="3"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit Review
        </button>
      </form>
    );
  }
}


export default ReviewForm;
