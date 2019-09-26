import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post }) => {
  return (
    <div className="post">
      <img src={post.imageUrl} alt="posted item" />
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    imageUrl: PropTypes.string,
  }),
};

export default Post;
