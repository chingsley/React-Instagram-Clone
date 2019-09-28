import React from 'react';
import Fuse from 'fuse.js';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/Index';
import SearchBar from './components/SearchBar/Index';
import './App.css';
import { Container, Col, Row } from 'reactstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filterText: '',
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  changeFilterText = e => {
    this.setState({ filterText: e.target.value });
  };

  render() {
    // Normal search usring javascript array filter method
    // const filteredPosts = this.state.posts.filter(post => post.username.includes(this.state.filterText));

    // Fuzzy search using fuse.js
    const options = { keys: ['username']};
    const fuse = new Fuse(this.state.posts, options);
    const filteredPosts = this.state.filterText ?
                                fuse.search(this.state.filterText) : this.state.posts;
    return (
      <div className="App">
       <Container>
         <Row>
            <Col sm="12" md={{ size: 10, offset: 1 }}>
              <SearchBar
                filterText={this.state.filterText}
                changeFilterText={this.changeFilterText}
              />
              {filteredPosts.map(post => <PostContainer key={post.id} post={post} />)}
            </Col>
          </Row>
       </Container>
      </div>
    );
  }
}

export default App;
