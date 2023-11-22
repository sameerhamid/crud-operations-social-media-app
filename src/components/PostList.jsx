import React from "react";
import Post from "./Post";
// import { PostListContext } from "../store/post-list-store";
// import Loading from "./Loading";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList } = useContext(PostListContext);

  const postList = useLoaderData();

  return (
    <div className="post_list_container">
      {/* {loading && <Loading />} */}
      {/* {!loading && postList.length === 0 && <div>No Posts Availbale</div>} */}
      {postList.length === 0 && <div>No Posts Availbale</div>}

      {postList?.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      {/* {!loading && postList?.map((post) => <Post post={post} key={post.id} />)} */}
    </div>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
