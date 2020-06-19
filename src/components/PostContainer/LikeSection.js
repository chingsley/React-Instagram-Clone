import React from 'react';
import PropTypes from 'prop-types';

class LikeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post,
      likes: 0,
      postId: this.props.post.id,
    };
  }

  componentDidMount() {
    const id = this.state.postId;
    if (localStorage.getItem(`${id}Likes`)) {
      this.setState({likes: JSON.parse(localStorage.getItem(`${id}Likes`))});
    } else {
      this.setState({likes: this.props.post.likes});
      setTimeout(() => this.saveLikesToLocalStorage(), 500)
    }
  }

  incrementLike = () => {
    this.setState(prevState => ( {likes : prevState.likes + 1}));
    setTimeout(() => this.saveLikesToLocalStorage(), 500);
  };

  saveLikesToLocalStorage = () => {
    localStorage.setItem(`${this.state.postId}Likes`, this.state.likes);
  };
  
  render() {
    return (
      <div className="like-section">
        <i className="far fa-heart" onClick={this.incrementLike} />
        <i className="far fa-comment" />
        <p>{this.state.likes} likes</p>
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
