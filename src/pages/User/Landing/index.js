import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";

const Landing = () => (
  <>
    <Navbar />
    <div className="jumbotron">
      <h1 className="display-4">
        Blog Tugas It<span className="full-stop">.</span>
      </h1>
      <main>Blog ini hanya untuk tugas kuliah</main>
      <hr className="my-4 gold-hr" />
      <p>Klik dibawah ini!</p>
      <Link
        className="btn btn-outline-primary btn-lg"
        to="/posts"
        role="button"
      >
        Lihat Blog Posts
      </Link>
    </div>
  </>
);

export default Landing;
