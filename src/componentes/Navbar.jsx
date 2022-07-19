import React, { component } from "react";
import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
              height="30px"
              className="d-inline-block align-top logo"
              alt=""
            ></img>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
