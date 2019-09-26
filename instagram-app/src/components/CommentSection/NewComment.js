import React from 'react';
import PropTypes from 'prop-types';


  const NewComment = props => {
    return (
      <form onSubmit={props.submitComment} className="input-form">
        <input
          type="text"
          placeholder="Add a comment..."
          onChange={props.changeComment}
          value={props.inputComment}
        />
      </form>
    );
  };

  NewComment.propTypes = {
    submitComment: PropTypes.func,
    changeComment: PropTypes.func,
    iputComment: PropTypes.string,
  };


export default NewComment;
