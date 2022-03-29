import { useDispatch, useSelector } from "react-redux";
import "./PostList.css";
import { getPosts } from "../../redux/action/postAction";
import { useEffect } from "react";
import PostCard from "../PostCard/PostCard";

function PostList() {
  const dispatch = useDispatch();
  //eslint-disable-next-line
  useEffect(async () => {
    await dispatch(getPosts());
    //eslint-disable-next-line
  }, []);

  const posts = useSelector((state) => state.postsReducer.posts);

  return (
    <div>
      <div className="cards">
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

export default PostList;
