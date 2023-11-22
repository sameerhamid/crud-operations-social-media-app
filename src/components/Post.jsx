import React, { useContext, useState } from "react";
import { PostListContext } from "../store/post-list-store";
import { MdDelete } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

const Post = ({ post }) => {
  const { deletePost, updatePostReactions } = useContext(PostListContext);
  const [show, setShow] = useState(false);

  return (
    <div className="card post_card" style={{ width: "18rem" }} key={post.id}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {post.reactions}
      </span>

      <div className="card-body">
        <div>
          <h5 className="card-title">{post?.title}</h5>
          <p className={`card-text card_body ${show && "show_more"}`}>
            {post?.body}
          </p>
          <div className="readmore" onClick={() => setShow(!show)}>
            <span className="badge rounded-pill text-bg-secondary">
              read more
            </span>
          </div>
        </div>
        {post?.tags?.map((tag, key) => (
          <span className="badge text-bg-success hashtag" key={key}>
            {tag}
          </span>
        ))}

        <div className="buttons mt-4">
          <button
            type="button"
            className="btn btn-primary position-relative"
            onClick={() => updatePostReactions(post.id)}>
            <AiOutlineLike style={{ fontSize: 20 }} />
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger "
              style={{ fontSize: 10 }}>
              {post.reactions}
            </span>
          </button>

          <span
            className="badge text-bg-danger"
            onClick={() => deletePost(post.id)}>
            <MdDelete style={{ fontSize: 24 }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
