import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Restaurant = (props) => {
  const { resData } = props;
  const {
    id,
    name,
    avgRating,
    cuisines,
    costForTwo,
    cloudinaryImageId,
  } = resData.info;
  
  return (
    <div className="container3">
      <div className="cards">
        <div className="card">
          <div className="cardImage">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                cloudinaryImageId
              }
              alt="img"
            />
          </div>
          <div className="details">
            {/* //Dynameic details */}
            <h3><Link to={"/menu/"+id}>{name}</Link></h3>
            <p>Ratings:  {avgRating}K</p>
            <p id="cuisine">Cuisines:  {cuisines.join(", ")}</p>
            <p>Cost:  {costForTwo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
