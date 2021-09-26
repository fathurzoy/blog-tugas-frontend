import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavbarAdmin extends Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };

    this.handleNavbarCollapse = this.handleNavbarCollapse.bind(this);
  }

  // Update navbar component when user logs in, to display "Login" or "Logout"
  componentDidMount() {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      this.setState((prevState) => {
        if (!prevState.isLoggedIn) {
          return { isLoggedIn: true };
        }
      });
    }
    if (sessionStorage.getItem("isLoggedIn") === "false") {
      this.setState((prevState) => {
        if (prevState.isLoggedIn) {
          return { isLoggedIn: false };
        }
      });
    }
  }

  // Collapse navabr after clicked on mobile screens
  handleNavbarCollapse() {
    document.querySelector("#navbarTogglerDemo01").classList.remove("show");
  }

  render() {
    return (
      <nav className="navbar navbar-custom navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          <i className="fas fa-pen-alt" /> Fathurzoy
          {/* <span className="full-stop">.</span>It */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="fa fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="navbar-item">
              <Link
                to="/fathurzoy/posts"
                className="nav-link"
                // Collapse the navbar once an item is clicked
                onClick={this.handleNavbarCollapse}
              >
                Posts
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/fathurzoy/posts/new"
                className="nav-link"
                // Collapse the navbar once an item is clicked
                onClick={this.handleNavbarCollapse}
              >
                New Post
              </Link>
            </li>

            {/* Display "Login" or "Logout" link based on the state of the navbar component */}
            {!this.state.isLoggedIn ? (
              <li className="navbar-item">
                <Link
                  to="/fathurzoy/login"
                  className="nav-link"
                  // Collapse the navbar once an item is clicked
                  onClick={this.handleNavbarCollapse}
                >
                  Login
                </Link>
              </li>
            ) : (
              <li className="navbar-item">
                <Link
                  to="/fathurzoy/logout"
                  className="nav-link"
                  onClick={() => {
                    window.sessionStorage.removeItem("isLoggedIn");
                    window.sessionStorage.removeItem("username");
                    window.location = "/posts";
                  }}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarAdmin;
