import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Comment from './Comment';
import NewComment from './NewComment';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: props.post,
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

  deleteComment = commentId => {
    this.setState(prevState => ({comments: prevState.comments.filter(comment => comment.id !== commentId)}));
    setTimeout(() => {
      this.saveCommentsToLocalStorage();
    }, 500);

    // Another way of achieving the same thing
    // const filteredComments = this.state.comments.filter(comment => comment.id !== commentId);
    // this.setState({comments: filteredComments});
  };

  render() {
    // const start = moment([2019, 8, 5]);
    // const end = moment();
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => <Comment key={comment.id} comment={comment} deleteComment={this.deleteComment} />)}
        {/* {console.log('end.to(start) = ', end.to(start)) } */}
        {/* {console.log(moment(this.state.post.timestamp).format("MM/DD/YY"))} */}
        <p className="timestamp">{moment(this.state.post.timestamp, 'mm/dd/y, h:m:s a').fromNow()}</p>
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
