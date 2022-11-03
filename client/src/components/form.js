import { useState } from "react";
import { API_URL } from "../constants";

const Form = (props) => {
  const [blog, setBlog] = useState({
    title: "",
    blurb: "",
    content: "",
    img: "",
  });

  const handleTitleChange = (event) => {
    const title = event.target.value;
    setBlog((blog) => ({ ...blog, title }));
  };

  const handleBlurbChange = (event) => {
    const blurb = event.target.value;
    setBlog((blog) => ({ ...blog, blurb }));
  };

  const handleContentChange = (event) => {
    const content = event.target.value;
    setBlog((blog) => ({ ...blog, content }));
  };

  const handleImgChange = (event) => {
    const img = event.target.value;
    setBlog((blog) => ({ ...blog, img }));
  };

  //A function to handle the post request
  const postBlog = (newBlog) => {
    return fetch(`${API_URL}/api/blog`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
        props.addBlog(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postBlog(blog);
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="add-blog-title">Title</label>
        <br />
        <input
          type="text"
          id="add-blog-title"
          value={blog.title}
          onChange={handleTitleChange}
        />

        <p>
          <label htmlFor="add-blog-blurb">Summary</label>
          <br />
          <input
            type="text"
            id="add-blog-blurb"
            value={blog.blurb}
            onChange={handleBlurbChange}
          />
        </p>

        <p>
          <label htmlFor="add-blog-content">Content</label>
          <br />
          <input
            type="text"
            id="add-user-content"
            value={blog.content}
            onChange={handleContentChange}
          />
        </p>

        <p>
          <label>Image Url</label>
          <br />
          <input
            type="url"
            id="add-blog-image"
            value={blog.img}
            onChange={handleImgChange}
          />
        </p>
      </fieldset>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};
export default Form;
