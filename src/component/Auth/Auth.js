import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import auth from '../../ducks/reducers/form'
import {connect} from 'react-redux'

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: " ",
      password: " "
    };
  }

  updateUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  updatePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  registerUser = (e) => {
    let { username, password } = this.state;
    axios
      .post("http://localhost:3001/api/register", { username, password })
      .then(() => {
        this.props.history.push("/dashboard");
      });
  };

  loginUser = () => {
    let { username, password } = this.state;
    axios
      .post("http://localhost:3001/api/login", { username, password })
      .then(user => {
        if (user.data.length > 0) {
          this.props.history.push("/dashboard");
        }
      });
  };

  render() {
    let { username, password } = this.state;
    return (
      <div>
        <h1>Helo</h1>
        <h4>username</h4>
        <input type="text" value={username} onChange={this.updateUsername} />
        <div>
          <h4>password</h4>
          <input type="text" value={password} onChange={this.updatePassword} />
        </div>
        <button onClick={() => this.registerUser()}>Register</button>
        <button onClick={() => this.loginUser()}>Login</button>
      </div>
    );
  }
}

let mapStateToProps = state=>{
    return{

    }
}


