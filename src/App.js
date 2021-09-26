import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import style
import "./stylesheets/index.css";

//Import all components
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// const Landing = lazy(() => import("./components/Landing"));
// const Post = lazy(() => import("./components/Post"));
// const CreatePost = lazy(() => import("./components/CreatePosts"));
// const EditPost = lazy(() => import("./components/EditPost"));
// const PostsList = lazy(() => import("./components/PostsList"));
// const Login = lazy(() => import("./components/Login"));
// const About = lazy(() => import("./components/About"));
const Landing = lazy(() => import("./pages/User/Landing"));
const Post = lazy(() => import("./pages/User/Post"));
const About = lazy(() => import("./pages/User/About"));
const PostsList = lazy(() => import("./pages/User/PostsList"));
const AdminPost = lazy(() => import("./pages/Admin/Post"));
const AdminPostsList = lazy(() => import("./pages/Admin/PostsList"));
const AdminCreatePost = lazy(() => import("./pages/Admin/CreatePost"));
const AdminEditPost = lazy(() => import("./pages/Admin/EditPost"));
const AdminLogin = lazy(() => import("./pages/Admin/Login"));

const renderLoader = () => (
  <div className="spinner-container">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

const App = () => (
  <div className="container">
    <Router>
      {/* <Navbar /> */}
      <Suspense fallback={renderLoader()}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/posts" exact component={PostsList} />
          <Route path="/posts/:id" exact component={Post} />
          <Route path="/about" component={About} />
          {/* admin */}
          <Route path="/fathurzoy/posts" exact component={AdminPostsList} />
          <Route path="/fathurzoy/posts" exact component={AdminPostsList} />
          <Route
            path="/fathurzoy/posts/new/"
            exact
            component={AdminCreatePost}
          />
          <Route path="/fathurzoy/posts/:id" exact component={AdminPost} />
          <Route
            path="/fathurzoy/posts/:id/edit"
            exact
            component={AdminEditPost}
          />
          <Route path="/fathurzoy/login" component={AdminLogin} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  </div>
);

export default App;
