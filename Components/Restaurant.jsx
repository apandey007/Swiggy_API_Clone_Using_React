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
            <h2 className="font-bold text-xl my-2 border-b-2 text-center"><Link to={"/menu/"+id}>{name}</Link></h2>
            <p className="font-semibold">Ratings:  {avgRating}K</p>
            <p className="font-semibold" id="cuisine">Cuisines:  {cuisines.join(", ")}</p>
            <p className="font-semibold">Cost:  {costForTwo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
