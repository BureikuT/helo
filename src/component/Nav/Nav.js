import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Nav(props) {
  let { username, profile_picture } = props;
  return (
    <div>
      <Link to="/dashboard">
        <button>Home</button>
      </Link>

      <Link to="/new">
        <button>New Post</button>
      </Link>

      <Link to="/">
        <button>Logout</button>
      </Link>

      <h3>{username}</h3>
      <img src={profile_picture} />
    </div>
  );
}

export default Nav
