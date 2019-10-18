import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PostHeader from './PostHeader';
import Post from './Post';
import LikeSection from './LikeSection';
import CommentSection from '../CommentSection/Index';
import './PostContainer.css';

const PostContainerWrapper = styled.div`
  border          : 1px solid silver;
  box-shadow      : 1px 1px 5px silver;
  width           : 70%;
  margin          : 30px auto;
  padding-bottom  : 18px;

  @media(max-width: 770px) {
    width          : 90%;
    border         : 1px solid red;
  }
`;

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post,
      currentUser:this.props.currentUser,
    };
  }

  render() {
    return (
      <PostContainerWrapper>
        <PostHeader post={this.state.post} />
        <Post post={this.state.post} />
        <LikeSection post={this.state.post} />
        <CommentSection post={this.state.post} currentUser={this.state.currentUser} />
      </PostContainerWrapper>
    );
  }

}

PostContainer.propTypes = {
  post: PropTypes.object,
};

export default PostContainer;
