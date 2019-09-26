import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ post }) => {
  return (
    <div className="post-header">
      <img src={post.thumbnailUrl} alt="thumbnail diagram" />
      <span>{post.username}</span>
    </div>
  );
};

PostHeader.propTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
  }),
};

export default PostHeader;
