import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostedComment = styled.p`
  display: flex;
  justify-content: space-between;

  span {
    display: block;
  }

  .btn-delete {
    background-color: transparent;
    border: none;
    outline: 0 !important;
    color: rgba(220, 53, 69, 0.5);
    font-size: 14px;
    font-weight: 300;
    display: block;

    :hover {
      color:rgba(220, 53, 69, 1)
    }
  }

  @media (max-width: 500px) {
    display: block;
  }
`;

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.comment,
    };
  }

  handleDeleteComment = () => {
    this.props.deleteComment(this.state.comment.id);
  };

  render() {
    return (
      <PostedComment>
        <span><strong>{this.props.comment.username}</strong>: {this.props.comment.text}</span>
        <button className="btn-delete" onClick={this.handleDeleteComment}>Delete</button>
      </PostedComment>
    );
  }
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    text: PropTypes.string
  }),
}

export default Comment;
