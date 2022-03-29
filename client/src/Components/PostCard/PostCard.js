import React from "react";
import "./PostCard.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/action/postAction";
import EditPost from "../EditPost/EditPost";

function PostCard({ post }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost({ id: post._id }));
  };

  return (
    <div className="wrapper">
      <div className="box">
        <div className="boo">
          <img
            src={`/uploads/${post.image[0]}`}
            alt=""
            style={{ width: "340px", height: "160px", borderRadius: "20px" }}
            className="postimg"
          />
          <h2> {post.adresse}</h2>
          <p>
            Number of rooms : {post.rooms} <br />
            Renter Phone Number :{post.phone}{" "}
          </p>
          <Link to={`/PostDetails/${post._id}`}>See More Details</Link>
        </div>
        <div className="but">
          <EditPost post={post} />
          <Button
            variant="danger"
            style={{ marginleft: "20px" }}
            onClick={() => handleDelete()}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
