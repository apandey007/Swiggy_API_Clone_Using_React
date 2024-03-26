import Restaurant from "./Restaurant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //state variable
  const [resList, setResList] = useState([]);
  const [resListChange, setResListChange] = useState([]);

  const [searchText, setSearchText] = useState(""); // This is only for getting the value in input box

  //data Fetch
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResListChange(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if(resList === null) return <Shimmer />
  return resList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container4 mt-3">
      <div className="sfContainer">
        <div className="filter font-semibold">
          <button
            onClick={() => {
              const result = resList.filter(
                (restaurant) =>
                  restaurant.info.avgRating >= 0 &&
                  restaurant.info.avgRating < 1
              );
              // console.log(result);
              setResListChange(result);
            }}
          >
            Rating 0-1
          </button>
        </div>
        <div className="filter font-semibold">
          <button
            onClick={() => {
              const result = resList.filter(
                (restaurant) =>
                  restaurant.info.avgRating >= 1.0 &&
                  restaurant.info.avgRating < 2.0
              );
              // console.log(result);
              setResListChange(result);
            }}
          >
            Rating 1-2
          </button>
        </div>
        <div className="filter font-semibold">
          <button
            onClick={() => {
              const result = resList.filter(
                (restaurant) =>
                  restaurant.info.avgRating >= 2.0 &&
                  restaurant.info.avgRating < 3.0
              );
              // console.log(result);
              setResListChange(result);
            }}
          >
            Rating 2-3
          </button>
        </div>
        <div className="filter font-semibold">
          <button
            onClick={() => {
              const result = resList.filter(
                (restaurant) =>
                  restaurant.info.avgRating >= 3.0 &&
                  restaurant.info.avgRating < 4.0
              );
              // console.log(result);
              setResListChange(result);
            }}
          >
            Rating 3-4
          </button>
        </div>
        <div className="filter font-semibold">
          <button
            onClick={() => {
              const result = resList.filter(
                (restaurant) =>
                  restaurant.info.avgRating >= 4.0 &&
                  restaurant.info.avgRating <= 5.0
              );
              // console.log(result);
              setResListChange(result);
            }}
          >
            Rating 4-5
          </button>
        </div>
        <div className="search">
          <input
            type="text"
            className="border border-teal-950 border-b-2 border-r-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btm bg-green-200 ml-1 px-1 border-teal-950 border-b-2 border-r-2"
            onClick={() => {
              const result2 = resList.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setResListChange(result2);
              // console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="cardsBody ml-10">
        {resListChange.map((restaurant) => (
          <Restaurant key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
