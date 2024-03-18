import Restaurant from "./Restaurant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //state variable
  const [resList,setResList]=useState([]);
  const [resListChange,setResListChange]=useState([]);

  const [searchText,setSearchText]=useState("");        // This is only for getting the value in input box

  //data Fetch
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData =async () => {
    const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json();

    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setResListChange(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // const resList = [
  //   {
  //     info: {
  //       id: "151276",
  //       name: "UBQ by Barbeque Nation",
  //       cloudinaryImageId: "gdi8i1suu2ppfl90nvta",
  //       locality: "City Center",
  //       areaName: "Durgapur Locality",
  //       costForTwo: "₹300 for two",
  //       cuisines: [
  //         "North Indian",
  //         "Barbecue",
  //         "Biryani",
  //         "Kebabs",
  //         "Mughlai",
  //         "Desserts",
  //       ],
  //       avgRating: 4.3,
  //       parentId: "10804",
  //       avgRatingString: "4.3",
  //       totalRatingsString: "1K+",
  //       sla: {
  //         deliveryTime: 45,
  //         lastMileTravel: 4.3,
  //         serviceability: "SERVICEABLE",
  //         slaString: "40-45 mins",
  //         lastMileTravelString: "4.3 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2024-03-14 23:00:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "50% OFF",
  //         subHeader: "UPTO ₹80",
  //       },
  //       orderabilityCommunication: {
  //         title: {},
  //         subTitle: {},
  //         message: {},
  //         customIcon: {},
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {
  //       context: "seo-data-56b1cbd7-b25c-46f9-85e8-e890cb735e94",
  //     },
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-city-center-durgapur-locality-durgapur-151276",
  //       text: "RESTAURANT_MENU",
  //       type: "WEBLINK",
  //     },
  //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  //   },
  //   {
  //     info: {
  //       id: "254157",
  //       name: "McDonald's",
  //       cloudinaryImageId: "535fc9f9c135f7982317bbb6a64a1ffc",
  //       locality: "The Junction Mall",
  //       areaName: "Durgapur Locality",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["American"],
  //       avgRating: 4.6,
  //       parentId: "630",
  //       avgRatingString: "4.6",
  //       totalRatingsString: "1K+",
  //       sla: {
  //         deliveryTime: 27,
  //         lastMileTravel: 4.6,
  //         serviceability: "SERVICEABLE",
  //         slaString: "25-30 mins",
  //         lastMileTravelString: "4.6 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2024-03-14 23:00:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "40% OFF",
  //         subHeader: "UPTO ₹80",
  //       },
  //       orderabilityCommunication: {
  //         title: {},
  //         subTitle: {},
  //         message: {},
  //         customIcon: {},
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {
  //       context: "seo-data-56b1cbd7-b25c-46f9-85e8-e890cb735e94",
  //     },
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/mcdonalds-the-junction-mall-durgapur-locality-durgapur-254157",
  //       text: "RESTAURANT_MENU",
  //       type: "WEBLINK",
  //     },
  //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  //   },
  //   {
  //     info: {
  //       id: "244206",
  //       name: "Subway",
  //       cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
  //       locality: "Junction Mall",
  //       areaName: "Durgapur Locality",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
  //       avgRating: 4.3,
  //       parentId: "2",
  //       avgRatingString: "4.3",
  //       totalRatingsString: "1K+",
  //       sla: {
  //         deliveryTime: 32,
  //         lastMileTravel: 4.6,
  //         serviceability: "SERVICEABLE",
  //         slaString: "30-35 mins",
  //         lastMileTravelString: "4.6 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2024-03-14 22:00:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       aggregatedDiscountInfoV2: {},
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       orderabilityCommunication: {
  //         title: {},
  //         subTitle: {},
  //         message: {},
  //         customIcon: {},
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {
  //       context: "seo-data-56b1cbd7-b25c-46f9-85e8-e890cb735e94",
  //     },
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/subway-junction-mall-durgapur-locality-durgapur-244206",
  //       text: "RESTAURANT_MENU",
  //       type: "WEBLINK",
  //     },
  //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  //   },
  //   {
  //     info: {
  //       id: "101354",
  //       name: "Pizza Hut",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       locality: "The Junction Mall",
  //       areaName: "Durgapur Locality",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.3,
  //       parentId: "721",
  //       avgRatingString: "4.3",
  //       totalRatingsString: "5K+",
  //       sla: {
  //         deliveryTime: 33,
  //         lastMileTravel: 4.6,
  //         serviceability: "SERVICEABLE",
  //         slaString: "30-35 mins",
  //         lastMileTravelString: "4.6 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2024-03-15 00:00:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "50% OFF",
  //         subHeader: "UPTO ₹100",
  //       },
  //       orderabilityCommunication: {
  //         title: {},
  //         subTitle: {},
  //         message: {},
  //         customIcon: {},
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {
  //       context: "seo-data-56b1cbd7-b25c-46f9-85e8-e890cb735e94",
  //     },
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/pizza-hut-the-junction-mall-durgapur-locality-durgapur-101354",
  //       text: "RESTAURANT_MENU",
  //       type: "WEBLINK",
  //     },
  //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  //   },
  //   {
  //     info: {
  //       id: "506415",
  //       name: "Mama Mia! - Italian Ice Creams & Cakes",
  //       cloudinaryImageId: "2a7770f90e4a76d046bfa8aa944c68b7",
  //       locality: "City Center",
  //       areaName: "Durgapur Locality",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Ice Cream", "Desserts", "Bakery"],
  //       avgRating: 4.7,
  //       parentId: "471728",
  //       avgRatingString: "4.7",
  //       totalRatingsString: "500+",
  //       sla: {
  //         deliveryTime: 21,
  //         lastMileTravel: 3.5,
  //         serviceability: "SERVICEABLE",
  //         slaString: "20-25 mins",
  //         lastMileTravelString: "3.5 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2024-03-14 22:00:00",
  //         opened: true,
  //       },
  //       badges: {
  //         imageBadges: [
  //           {
  //             imageId: "v1695133679/badges/Pure_Veg111.png",
  //             description: "pureveg",
  //           },
  //         ],
  //       },
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {
  //             badgeObject: [
  //               {
  //                 attributes: {
  //                   description: "pureveg",
  //                   imageId: "v1695133679/badges/Pure_Veg111.png",
  //                 },
  //               },
  //             ],
  //           },
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "50% OFF",
  //         subHeader: "UPTO ₹100",
  //       },
  //       orderabilityCommunication: {
  //         title: {},
  //         subTitle: {},
  //         message: {},
  //         customIcon: {},
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {
  //       context: "seo-data-56b1cbd7-b25c-46f9-85e8-e890cb735e94",
  //     },
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/mama-mia-italian-ice-creams-and-cakes-city-center-durgapur-locality-durgapur-506415",
  //       text: "RESTAURANT_MENU",
  //       type: "WEBLINK",
  //     },
  //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  //   },
  //   {
  //     info: {
  //       id: "97691",
  //       name: "KFC",
  //       cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
  //       locality: "Junction Mall",
  //       areaName: "City Centre",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       avgRating: 4.5,
  //       parentId: "547",
  //       avgRatingString: "4.5",
  //       totalRatingsString: "5K+",
  //       sla: {
  //         deliveryTime: 25,
  //         lastMileTravel: 4.6,
  //         serviceability: "SERVICEABLE",
  //         slaString: "25-30 mins",
  //         lastMileTravelString: "4.6 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2024-03-15 00:00:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "ITEMS",
  //         subHeader: "AT ₹179",
  //       },
  //       orderabilityCommunication: {
  //         title: {},
  //         subTitle: {},
  //         message: {},
  //         customIcon: {},
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {
  //       context: "seo-data-56b1cbd7-b25c-46f9-85e8-e890cb735e94",
  //     },
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/kfc-junction-mall-city-centre-durgapur-97691",
  //       text: "RESTAURANT_MENU",
  //       type: "WEBLINK",
  //     },
  //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  //   },
  //   {
  //     info: {
  //       id: "697185",
  //       name: "Burger King",
  //       cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //       locality: "Bidhan Nagar",
  //       areaName: "Durgapur",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Burgers", "American"],
  //       avgRating: 4.4,
  //       parentId: "166",
  //       avgRatingString: "4.4",
  //       totalRatingsString: "1K+",
  //       sla: {
  //         deliveryTime: 28,
  //         lastMileTravel: 5,
  //         serviceability: "SERVICEABLE",
  //         slaString: "25-30 mins",
  //         lastMileTravelString: "5.0 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2024-03-14 23:45:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "60% OFF",
  //         subHeader: "UPTO ₹120",
  //       },
  //       orderabilityCommunication: {
  //         title: {},
  //         subTitle: {},
  //         message: {},
  //         customIcon: {},
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {
  //       context: "seo-data-56b1cbd7-b25c-46f9-85e8-e890cb735e94",
  //     },
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/burger-king-bidhan-nagar-durgapur-durgapur-697185",
  //       text: "RESTAURANT_MENU",
  //       type: "WEBLINK",
  //     },
  //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  //   },
  //   {
  //     info: {
  //       id: "564244",
  //       name: "Wow! Momo",
  //       cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
  //       locality: "City Center",
  //       areaName: "Durgapur Locality",
  //       costForTwo: "₹300 for two",
  //       cuisines: [
  //         "Tibetan",
  //         "Healthy Food",
  //         "Asian",
  //         "Chinese",
  //         "Snacks",
  //         "Continental",
  //         "Desserts",
  //         "Beverages",
  //       ],
  //       avgRating: 4.6,
  //       parentId: "1776",
  //       avgRatingString: "4.6",
  //       totalRatingsString: "1K+",
  //       sla: {
  //         deliveryTime: 26,
  //         lastMileTravel: 4,
  //         serviceability: "SERVICEABLE",
  //         slaString: "25-30 mins",
  //         lastMileTravelString: "4.0 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2024-03-14 23:00:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "ITEMS",
  //         subHeader: "AT ₹99",
  //       },
  //       orderabilityCommunication: {
  //         title: {},
  //         subTitle: {},
  //         message: {},
  //         customIcon: {},
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {
  //       context: "seo-data-56b1cbd7-b25c-46f9-85e8-e890cb735e94",
  //     },
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/wow-momo-city-center-durgapur-locality-durgapur-564244",
  //       text: "RESTAURANT_MENU",
  //       type: "WEBLINK",
  //     },
  //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  //   },
  //   {
  //     info: {
  //       id: "611426",
  //       name: "Momo Mia",
  //       cloudinaryImageId: "z5tlcjwl62ouj7vybkpb",
  //       locality: "Railway Station Road",
  //       areaName: "Railway Station Road",
  //       costForTwo: "₹250 for two",
  //       cuisines: [
  //         "Momos",
  //         "Tibetan",
  //         "Chinese",
  //         "American",
  //         "rolls",
  //         "Snacks",
  //       ],
  //       avgRating: 4.1,
  //       parentId: "5413",
  //       avgRatingString: "4.1",
  //       totalRatingsString: "500+",
  //       sla: {
  //         deliveryTime: 36,
  //         lastMileTravel: 3,
  //         serviceability: "SERVICEABLE",
  //         slaString: "35-40 mins",
  //         lastMileTravelString: "3.0 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2024-03-14 23:45:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "20% OFF",
  //         subHeader: "UPTO ₹50",
  //       },
  //       orderabilityCommunication: {
  //         title: {},
  //         subTitle: {},
  //         message: {},
  //         customIcon: {},
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {
  //       context: "seo-data-56b1cbd7-b25c-46f9-85e8-e890cb735e94",
  //     },
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/momo-mia-railway-station-road-durgapur-611426",
  //       text: "RESTAURANT_MENU",
  //       type: "WEBLINK",
  //     },
  //     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  //   },
  // ];

  // if(resList === null) return <Shimmer />
  
  return (resList.length === 0) ? <Shimmer /> :  (
    <div className="container4">
      <div className="sfContainer">
        <div className="filter">
          <button onClick={()=>{
            const result = resList.filter((restaurant)=>(
              restaurant.info.avgRating>=0 && restaurant.info.avgRating<1
            ));
            // console.log(result);
            setResListChange(result);
          }}>Restaurant rating 0-1</button>
        </div>
        <div className="filter">
          <button onClick={()=>{
            const result = resList.filter((restaurant)=>(
              restaurant.info.avgRating>=1.0 && restaurant.info.avgRating<2.0
            ));
            // console.log(result);
            setResListChange(result);
          }}>Restaurant rating 1-2</button>
        </div>
        <div className="filter">
          <button onClick={()=>{
            const result = resList.filter((restaurant)=>(
              restaurant.info.avgRating>=2.0 && restaurant.info.avgRating<3.0
            ));
            // console.log(result);
            setResListChange(result);
          }}>Restaurant rating 2-3</button>
        </div>
        <div className="filter">
          <button onClick={()=>{
            const result = resList.filter((restaurant)=>(
              restaurant.info.avgRating>=3.0 && restaurant.info.avgRating<4.0
            ));
            // console.log(result);
            setResListChange(result);
          }}>Restaurant rating 3-4</button>
        </div>
        <div className="filter">
          <button onClick={()=>{
            const result = resList.filter((restaurant)=>(
              restaurant.info.avgRating>=4.0 && restaurant.info.avgRating<=5.0 
            ));
            // console.log(result);
            setResListChange(result);
          }}>Restaurant rating 4-5</button>
        </div>
        <div className="search">
          <input type="text" className="" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button onClick={()=>{
            const result2 = resList.filter((restaurant)=>(
              restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            ));
            setResListChange(result2);
            // console.log(searchText);
          }}>Search</button>
        </div>
      </div>
      

      <div className="cardsBody">
        {resListChange.map((restaurant) => (
          <Restaurant key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
