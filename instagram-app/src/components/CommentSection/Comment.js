import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <p className="comment">
      <strong>{props.comment.username}</strong>: {props.comment.text}
    </p>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    text: PropTypes.string
  }),
};

export default Comment;