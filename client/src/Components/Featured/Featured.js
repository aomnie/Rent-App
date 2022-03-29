import React from "react";

import "./Featured.css";

import House1 from "../../Assets/house1.jpg";
import Bed1 from "../../Assets/bed1.jpg";
import Bed2 from "../../Assets/bed2.jpg";
import Kitchen from "../../Assets/kitchen.jpg";
import Bathroom from "../../Assets/bath1.jpg";

import House2 from "../../Assets/house2.jpg";
import Bed3 from "../../Assets/bed3.jpg";
import Bed4 from "../../Assets/bed4.jpg";
import Bathroom2 from "../../Assets/bath2.jpg";
import LivingRoom from "../../Assets/living-room.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <h1 className="featured-text">Top Featured Listings</h1>
      <p className="featured-text">
        Selected listings by City, State, & Zip based on views.
      </p>
      <div className="container">
        <img className="span-3 image-grid-row-2" src={House1} alt="" />
        <img src={Bed1} alt="" />
        <img src={Bed2} alt="" />
        <img src={Kitchen} alt="" />
        <img src={Bathroom} alt="" />
        <div className="span-3 img-details">
          <div className="top">
            <h2>Manzah 2 </h2>
            <p>House for Rent</p>
            <p className="price">2,677,000 DNT</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Rooms:</p>
                <p>7</p>
              </div>
              <div className="info">
                <p className="bold">Region:</p>
                <p>Tunis</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">State:</p>
                <p>Available</p>
              </div>
              <div className="info">
                <p className="bold">Wifi:</p>
                <p>Yes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>
            A beautiful modern day home in the city with a full-size pool.
            Spacious and luxurious home located in Tunis. Including media room,
            workout facility, and built-in sauna.
          </p>
        </div>
      </div>

      {/* Section section */}
      <div className="container">
        <img className="order-2" src={Bed3} alt="" />
        <img className="order-3" src={Bed4} alt="" />

        <img className="span-3 image-grid-row-2 order-1" src={House2} alt="" />

        <img className="order-4" src={Bathroom2} alt="" />
        <img className="order-5" src={LivingRoom} alt="" />

        <div className="span-2 right-img-details order-7">
          <p>
            A beautiful modern day home in the city with a full-size pool.
            Spacious and luxurious home located in Beja. Including media room,
            workout facility, and built-in sauna.{" "}
          </p>
        </div>

        <div className="span-3 img-details order-6">
          <div className="top">
            <h2>17 Rue Amor Kalcheni </h2>
            <p>House for Rent</p>
            <p className="price">1,400,000 DNT</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Rooms:</p>
                <p>6</p>
              </div>
              <div className="info">
                <p className="bold">Region:</p>
                <p>Beja</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">State:</p>
                <p>Available</p>
              </div>
              <div className="info">
                <p className="bold">Wifi:</p>
                <p>Yes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
