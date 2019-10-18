import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostHeaderWrapper = styled.div`
  img {
    width         : 30px;
    border-radius : 50%;
    display       : inline-block;
    margin        : 12px;
  }

  span {
    font-size      : 14px;
    font-weight    : 700;
  }
`;

const PostHeader = ({ post }) => {
  return (
    <PostHeaderWrapper>
      <img src={post.thumbnailUrl} alt="thumbnail diagram" />
      <span>{post.username}</span>
    </PostHeaderWrapper>
  );
};

PostHeader.propTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
  }),
};

export default PostHeader;
