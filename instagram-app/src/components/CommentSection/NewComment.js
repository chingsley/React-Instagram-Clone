import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 90%;
  border: none;
  outline: none;
  margin-right: 18px;
  font-size: 14px;
  height: 36px;

  @media (max-width: 500px) {
    width: 80%;
  }
`;


  const NewComment = props => {
    return (
      <form onSubmit={props.submitComment} className="input-form">
        <Input
          type="text"
          placeholder="Add a comment..."
          onChange={props.changeComment}
          value={props.inputComment}
        />
        <i className="fas fa-ellipsis-h"></i>
      </form>
    );
  };

  NewComment.propTypes = {
    submitComment: PropTypes.func,
    changeComment: PropTypes.func,
    iputComment: PropTypes.string,
  };


export default NewComment;
