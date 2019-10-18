import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostWrapper = styled.div`
  
  overflow        : hidden;

  img {
    display       : block;
    width         : 100%;
  }
`;

const Post = ({ post }) => {
  return (
    <PostWrapper>
      <img src={post.imageUrl} alt="posted item" />
    </PostWrapper>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    imageUrl: PropTypes.string,
  }),
};

export default Post;
