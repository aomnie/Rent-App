import {
  GET_POSTS,
  FILTER_POSTS,
  FIND_ONE,
  ADD_POST,
} from "../constants/action-types";
import axios from "axios";

export const getPosts = () => async (dispatch) => {
  try {
    const posts = await axios.get("http://localhost:5000/api/posts/postsList", {
      headers: { "Access-Control-Allow-Origin": "*" },
    });

    dispatch({ type: GET_POSTS, payload: posts.data.data });
  } catch (err) {
    console.error(err);
  }
};

export const filterPosts = (payload) => async (dispatch) => {
  try {
    await axios
      .get(`http://localhost:5000/api/posts/postsList/${payload}`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        dispatch({ type: FILTER_POSTS, payload: res.data.data });
      });
  } catch (err) {
    console.error(err);
  }
};

export const createPost = (payload) => async (dispatch) => {
  console.log(payload.newPost.image,"insiiiide el post action")
  await axios
    .post("http://localhost:5000/api/posts/addPost", payload.newPost, {
      headers: {
        "ContentType": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        authorization: localStorage.getItem("JWT"),
      },
    })
    .then((res) => dispatch({ type: ADD_POST, payload: res.data.data }))
    .catch((err) => console.log(err));
};

export const FindOne = (payload) => async (dispatch) => {
  try {
    console.log("posts payload", payload);
    await axios
      .get(`localhost:5000/api/posts/postList/post/${payload}`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        dispatch({ type: FIND_ONE, payload: res.data.data });
      });
  } catch (err) {
    console.error(err);
  }
};

export const deletePost = (payload) => async (dispatch) => {
  console.log(payload, "payload aaaaaaaaaaaaaaazebiiiiiiaa");

  await axios
    .delete(`http://localhost:5000/api/posts/deletePost/${payload.id}`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((res) => dispatch(getPosts()))
    .catch((err) => console.log(err));
};
export const editPost = (payload) => (dispatch) => {
  console.log(payload);
  axios
    .put(
      `http://localhost:5000/api/posts/updatePost/${payload.id}`,
      payload.updatedPost
    )
    .then(() => dispatch(getPosts()))
    .catch((err) => console.log(err));
};
