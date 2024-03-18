import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuList from "./MenuList";

const Menu = () => {
  //State Variable
  const [menuVal1, setMenuVal1] = useState([]);
  const [menuVal2, setMenuVal2] = useState([]);

  const { resId } = useParams(); // This is used to get the resId from the path whhich is used in routing
  // console.log(resId);

  //for Fetching data after redering the component
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=" +
        resId
    );

    const json = await data.json();
    setMenuVal1(json?.data?.cards[0]?.card?.card?.info);
    // console.log(json?.data?.cards[0]?.card?.card?.info);
    setMenuVal2(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };
  return menuVal1.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="container8">
        <div className="restraDetails">
          <h2>Restaurant Name: {menuVal1.name}</h2>
          <h3>{menuVal1.cuisines.join(", ")}</h3>
          <h3>Area: {menuVal1.areaName}</h3>
          <h3>
            Locality: {menuVal1.slugString}, {menuVal1.locality},{" "}
            {menuVal1.city}
          </h3>
          <h3>AvgRating: {menuVal1.avgRating}K</h3>
          <button
            className="menuButton"
            onClick={() => {
              console.log(menuVal2);
            }}
          >
            MenuList
          </button>
        </div>
      </div>
      <div className="restraMenuList">
        <div className="heading">
          <h1> Top Recommended FoodItems: </h1>
        </div>
        {menuVal2.map((menuList) => (
          <MenuList key={menuList?.card?.info?.name} resMenu={menuList} />
        ))}
      </div>
    </>
  );
};

export default Menu;
