import React from "react";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostListContext);
  // const navigate = useNavigate();
  // const postTitle = useRef ();
  // const postBody = useRef ();
  // const postHashtags = useRef();
  // const postUserId = useRef();

  // const handleSubmit = (e) => {
  // let newHashtags = postHashtags.current.value.replace(/\s+/g, " ").trim();
  // e.preventDefault();
  // const postData = {
  //   title: postTitle.current.value,
  //   body: postBody.current.value,
  //   tags: newHashtags.split(" "),
  //   userId: postUserId.current.value,
  //   reactions: 0,
  // };
  // addPost(postData);
  // (postTitle.current.value = ""),
  //   (postBody.current.value = ""),
  //   (postHashtags.current.value = ""),
  //   (postUserId.current.value = "");
  // };
  return (
    <Form className="create_post" method="POST">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          name="title"
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="How are you feeling today"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Body
        </label>
        <textarea
          name="body"
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="hashtags" className="form-label">
          Hashtags
        </label>
        <input
          name="tags"
          type="text"
          className="form-control"
          id="hashtags"
          placeholder="Please enter tags using space"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          name="userId"
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your user id"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary
      ">
        Add Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);

  let tags = postData.tags.replace(/\s+/g, " ").trim();
  const newPostData = {
    title: postData.title,
    body: postData.body,
    tags: tags.split(""),
    userId: postData.userId,
    reactions: 0,
  };

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPostData),
  })
    .then((res) => res.json())
    .then((post) => {
      // addPost(post);
      console.log({ post });
    });

  return redirect("/");
}

export default CreatePost;
