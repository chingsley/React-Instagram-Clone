import React from 'react';

const withAuth = PostPage => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
        currentUser: {}
      };
    }

    componentDidMount() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'))
      if(currentUser) {
        this.setState({ isLoggedIn: true, currentUser });
      }
    }

    render() {
      return this.state.isLoggedIn ? <PostPage currentUser={this.state.currentUser} /> : <LoginPage />;
    }
  }


  export default withAuth;