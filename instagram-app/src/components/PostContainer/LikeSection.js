import React from 'react';
import PropTypes from 'prop-types';

class LikeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post,
    };
  }
  
  render() {
    return (
      <div className="like-section">
        <i className="far fa-heart" />
        <i className="far fa-comment" />
        <p>{this.state.post.likes} likes</p>
      </div>
    );
  }
}

LikeSection.propTypes = {
  post: PropTypes.shape({
    likes: PropTypes.number,
  }),
};

export default LikeSection;
