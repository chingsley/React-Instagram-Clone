import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, Card } from 'reactstrap';
import './Login.css';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    console.log(e.target);
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value});
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    localStorage.setItem('currentUser', JSON.stringify({
      username: this.state.username,
      password: this.state.password
    }));
    window.location.reload(false);
  };

  render() {
    return (
      <Container className="login-container">
        <Row className="login-container-row">
          <Col className="login-container-col" sm="12" md={{size: 6, offset: 3}}>
            <Card body style={{ backgroundColor: '#e9ecef', }}>
              <h2 className="login-title">Login</h2>
              <Form className="login-form" onSubmit={this.handleLoginSubmit}>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  />
                </FormGroup>
                <Button color="secondary" block>Login</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>

    );
  }
}