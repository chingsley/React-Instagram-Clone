import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LikeSectionWrapper = styled.div`
  
  i {
    display     : inline-block;
    font-size   : 25px;
    margin      : 14px 0 10px 18px;
  }

  i:hover {
    cursor      : pointer;
  }

  p {
    margin-left : 18px;
    font-weight : 500;
  }
`;

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
      <LikeSectionWrapper>
        <i className="far fa-heart" onClick={this.incrementLike} />
        <i className="far fa-comment" />
        <p>{this.state.likes} likes</p>
      </LikeSectionWrapper>
    );
  }
}

LikeSection.propTypes = {
  post: PropTypes.shape({
    likes: PropTypes.number,
  }),
};

export default LikeSection;
