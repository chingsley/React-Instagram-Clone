import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import Post from './Post';
import LikeSection from './LikeSection';
import CommentSection from '../CommentSection/Index';
import './PostContainer.css';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post,
    };
  }

  render() {
    return (
      <div className="post-container">
        <PostHeader post={this.state.post} />
        <Post post={this.state.post} />
        <LikeSection post={this.state.post} />
        <CommentSection post={this.state.post} />
      </div>
    );
  }

}

PostContainer.propTypes = {
  post: PropTypes.object,
};

export default PostContainer;
