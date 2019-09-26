import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import NewComment from './NewComment';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.post.comments,
      inputComment: '',
    };
  }

  componentDidMount() {
    if (localStorage.getItem(this.props.post.id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.post.id))
      });
    } else {
      this.saveCommentsToLocalStorage();
    }
  }

  componentWillUnmount() {
    this.saveCommentsToLocalStorage();
  }

  saveCommentsToLocalStorage = () => {
    localStorage.setItem(this.props.post.id, JSON.stringify(this.state.comments));
  };

  changeComment = e => {
    this.setState({ inputComment: e.target.value });
  };

  submitComment = e => {
    e.preventDefault();
    const id = this.state.comments.length + 1;
    const newComment = { id, username: 'chingsley', text: this.state.inputComment };
    const comments = this.state.comments;
    comments.push(newComment);
    this.setState({ comments, inputComment: '' });
    setTimeout(() => {
      this.saveCommentsToLocalStorage();
    }, 500);
  };

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        <hr />
        <NewComment inputComment={this.state.inputComment} changeComment={this.changeComment} submitComment={this.submitComment} />
      </div>
    );
  }
}

CommentSection.propTypes = {
  post: PropTypes.shape({
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string,
        id: PropTypes.number,
      })
    )
  }),
};

export default CommentSection;
