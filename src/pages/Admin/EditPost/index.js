import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import sanitizeHtml from "sanitize-html";
import { useParams } from "react-router";
import MDEditor from "@uiw/react-md-editor";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";

const baseURL = process.env.REACT_APP_BASEURL || "http://localhost:5000";

const EditPost = () => {
  const { id } = useParams();
  const [value, setValue] = useState();
  console.log(id);

  const [data, setData] = useState({
    title: "",
    body: "",
    author: "",
    date: "",
    isLoggedIn: false,
  });

  useEffect(() => {
    setData({
      ...data,
      body: value,
    });
  }, [value]);

  useEffect(() => {
    axios
      .get(`${baseURL}/server/posts/${id}`)
      .then((post) => {
        console.log(post);
        setData({
          title: post.data.title,
          body: post.data.body,
          author: post.data.author,
          date: post.data.date,
          comments: post.data.comments,
        });
        setValue(post.data.body);
      })
      .catch((err) => console.error(err));

    if (sessionStorage.getItem("isLoggedIn") === "true") {
      setData({ isLoggedIn: true });
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Display a spinner until the post is submitted
    document.querySelector(".spinner-container").style.display = "flexbox";

    const sanitizedData = sanitizeHtml(data.body);
    setData({ ...data, body: sanitizedData });

    const editedPost = {
      title: data.title,
      author: data.author,
      body: data.body,
      date: data.date,
      comments: data.comments,
    };
    console.log("editedPost", editedPost);

    axios
      .post(`${baseURL}/server/posts/edit/${id}`, editedPost)
      .then(
        //         // redirect to SHOW page
        (res) => (window.location = `/fathurzoy/posts/${id}`)
      )
      .catch((err) => console.error(err));
  };
  if (true) {
    return (
      <>
        <NavbarAdmin />

        <div>
          {/* A spinner to indicate loading until new post is submitted */}
          <div className="spinner-container" style={{ display: "none" }}>
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div className="edit-post">
            <h1>
              Edit Blog Post<span className="full-stop">.</span>
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="edit-title">Title: </label>
                <input
                  className="form-control edit-title"
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                  required
                />
              </div>

              <div>
                <MDEditor height={200} value={value} onChange={setValue} />
                <div style={{ padding: "50px 0 0 0" }} />
                {/* <MDEditor.Markdown
                source={value}
                linkTarget="_blank"
                // previewOptions={{
                //   linkTarget: "_blank"
                // }}
              /> */}
              </div>
              <br />
              <div className="form-group">
                <input
                  type="submit"
                  value="Submit Post"
                  className="btn btn-outline-primary btn-lg"
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <NavbarAdmin />
        <div
          className="alert alert-warning"
          role="alert"
          onClick={() => (window.location = "/login")}
        >
          You need to login to edit your post!
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true" className="alert-close">
              &times;{" "}
            </span>
          </button>
        </div>
      </>
    );
  }
};

// class EditPost extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       title: "",
//       body: "",
//       author: "",
//       date: "",
//       isLoggedIn: false,
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleEditorChange = this.handleEditorChange.bind(this);
//   }

//   componentDidMount() {
//     axios
//       .get(`${baseURL}/server/posts/${this.props.match.params.id}`)
//       .then((post) => {
//         this.setState({
//           title: post.data.title,
//           body: post.data.body,
//           author: post.data.author,
//           date: post.data.date,
//           comments: post.data.comments,
//         });
//       })
//       .catch((err) => console.error(err));

//     if (sessionStorage.getItem("isLoggedIn") === "true") {
//       this.setState({ isLoggedIn: true });
//     }
//   }

//   handleEditorChange(event, editor) {
//     this.setState({ body: editor.getData() });
//   }

//   handleChange(event) {
//     const { name, value } = event.target;

//     this.setState({
//       [name]: value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     // Display a spinner until the post is submitted
//     document.querySelector(".spinner-container").style.display = "flexbox";

//     const sanitizedData = sanitizeHtml(this.state.body);
//     this.setState({ body: sanitizedData });

//     const editedPost = {
//       title: this.state.title,
//       author: this.state.author,
//       body: this.state.body,
//       date: this.state.date,
//       comments: this.state.comments,
//     };

//     axios
//       .post(
//         `${baseURL}/server/posts/edit/${this.props.match.params.id}`,
//         editedPost
//       )
//       .then(
//         // redirect to SHOW page
//         (res) => (window.location = `/posts/${this.props.match.params.id}`)
//       )
//       .catch((err) => console.error(err));
//   }

//   render() {
//     if (this.state.isLoggedIn) {
//       return (
//         <div>
//           {/* A spinner to indicate loading until new post is submitted */}
//           <div className="spinner-container" style={{ display: "none" }}>
//             <div className="spinner-border" role="status">
//               <span className="sr-only">Loading...</span>
//             </div>
//           </div>
//           <div className="edit-post">
//             <h1>
//               Edit Blog Post<span className="full-stop">.</span>
//             </h1>
//             <form onSubmit={this.handleSubmit}>
//               <div className="form-group">
//                 <label className="edit-title">Title: </label>
//                 <input
//                   className="form-control edit-title"
//                   type="text"
//                   name="title"
//                   value={this.state.title}
//                   onChange={this.handleChange}
//                   required
//                 />
//               </div>

//               <div>
//                 <MDEditor
//                   height={200}
//                   value={this.state.body}
//                   onChange={this.handleEditorChange}
//                 />

//                 {/* <CKEditor
//                   editor={ClassicEditor}
//                   data={this.state.body}
//                   onChange={this.handleEditorChange}
//                   config={{
//                     toolbar: [
//                       "Heading",
//                       "|",
//                       "Bold",
//                       "Italic",
//                       "Link",
//                       "NumberedList",
//                       "BulletedList",
//                       "|",
//                       "BlockQuote",
//                       "MediaEmbed",
//                       "Undo",
//                       "Redo",
//                     ],
//                   }}
//                 /> */}
//               </div>
//               <br />
//               <div className="form-group">
//                 <input
//                   type="submit"
//                   value="Submit Post"
//                   className="btn btn-outline-primary btn-lg"
//                 />
//               </div>
//             </form>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div
//           className="alert alert-warning"
//           role="alert"
//           onClick={() => (window.location = "/login")}
//         >
//           You need to login to edit your post!
//           <button
//             type="button"
//             className="close"
//             data-dismiss="alert"
//             aria-label="Close"
//           >
//             <span aria-hidden="true" className="alert-close">
//               &times;{" "}
//             </span>
//           </button>
//         </div>
//       );
//     }
//   }
// }

export default EditPost;
