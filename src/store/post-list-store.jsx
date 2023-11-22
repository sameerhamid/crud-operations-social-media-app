import { createContext, useEffect, useReducer, useState } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  updatePostReactions: () => {},
  // loading: false,
});

// reducer

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id != action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload.post, ...currPostList];
  } else if (action.type === "UPDATE_REACTIONS") {
    newPostList = currPostList.map((post) => {
      return post.id === action.payload.id
        ? { ...post, reactions: post.reactions + 1 }
        : post;
    });
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListContextPorvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  // const [loading, setLoading] = useState(false);

  const addPost = (post) => {
    // let newId =
    //   postList.length === 0 ? 0 : postList[postList.length - 1].id + 1;
    console.log({ post });
    const newPostData = {
      type: "ADD_POST",
      payload: {
        post,
      },
    };

    // console.log(newPostData.payload);
    dispatchPostList(newPostData);
  };

  const addIntialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const updatePostReactions = (id) => {
    dispatchPostList({
      type: "UPDATE_REACTIONS",
      payload: {
        id,
      },
    });
  };

  // useEffect(() => {
  //   setLoading(true);
  //   const contorller = new AbortController();
  //   const signal = contorller.signal;
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addIntialPosts(data.posts);
  //       setLoading(false);
  //     });
  //   return () => {
  //     console.log("Cleaning up UseEffect");
  //     contorller.abort();
  //   };
  // }, []);

  return (
    <PostListContext.Provider
      value={{
        postList,
        addPost,
        deletePost,
        updatePostReactions,
        // loading,
      }}>
      {children}
    </PostListContext.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: 0,
//     title: "something",
//     body: "Choose a photo or video from your library or shoot one in the app",
//     reactions: 0,
//     userId: "user-9",
//     tags: ["vacation", "mumbai"],
//   },
// ];

export default PostListContextPorvider;
