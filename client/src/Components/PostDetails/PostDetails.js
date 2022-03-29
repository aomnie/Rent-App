import React from "react";
import "./PostDetails.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";



function PostDetails({ post }) {
  const posts = useSelector((state) => state.postsReducer.posts);

  const { id } = useParams();
  const postDetail = posts.find((post) => post._id === id);
  console.log("imaaaage elli fi woset el details",postDetail.image)
  let x = [...postDetail.image].map(im => 
    `/uploads/${im}`
  );

  console.log(postDetail);
  return (
    <div className="postd">
      <div className="slider">
        <SimpleImageSlider
          width={700}
          height={400}
          images={x}
          showBullets={true}
          showNavs={true}
        />
      </div>

      <div className="postDetails">
        <h1>Adresse : {postDetail.adresse} </h1>
        {/* <h1>Posted By : {postDetail.user.id}</h1> */}
        <h1>Renter Phone Number : {postDetail.phone} </h1>
        <h1>Region : {postDetail.region} </h1>
        <h1>Rooms : {postDetail.rooms} </h1>
        <h1>Price : {postDetail.price} DNT </h1>
        <h1>
          Wifi : {postDetail.wifi ? "Contain Wifi" : "Wifi not available"}{" "}
        </h1>
        <h1>
          State : {postDetail.state ? "Available For Rent" : "Already Rented"}{" "}
        </h1>
        <h1>
          heater :{" "}
          {postDetail.heater ? "Contain Heater" : "Heater Not Available"}
        </h1>
        <h1>
          conditioner :{" "}
          {postDetail.conditioner
            ? "Contain Conditioner"
            : "Conditioner not available"}
        </h1>
      </div>
    </div>
  );
}

export default PostDetails;
