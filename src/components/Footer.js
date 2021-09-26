import React from "react";

const Footer = () => (
  <footer>
    Created by <span id="rajat">Fathur</span>
    <br />
    <span>
      <i
        className="fab fa-github"
        onClick={() => window.open("https://github.com/fathurzoy", "_blank")}
      ></i>{" "}
      <i
        className="fab fa-linkedin"
        onClick={() =>
          window.open("https://www.linkedin.com/in/fathurzoy", "_blank")
        }
      ></i>{" "}
      <i
        className="fab fa-facebook"
        onClick={() =>
          window.open("https://www.facebook.com/fathur.fauzan/", "_blank")
        }
      ></i>{" "}
      <i
        className="fab fa-instagram"
        onClick={() => window.open("https://twitter.com/fathurzoy", "_blank")}
      ></i>
    </span>
  </footer>
);

export default Footer;
