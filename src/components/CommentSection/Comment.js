import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'reactstrap';

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
      <p className="comment">
        <span><strong>{this.props.comment.username}</strong>: {this.props.comment.text}</span>
        <button className="btn-delete" onClick={this.handleDeleteComment}>Delete</button>
      </p>
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
