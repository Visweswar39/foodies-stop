import React from "react";
import { useParams } from "react-router";
import ShimmerCard from "../components/Shimmer/ShimmerCard";
import useRestaurant from "../utils/useRestaurant";

function RestaurantMenu() {
  const { id } = useParams();
  const [Restaurant, RecommendedItems] = useRestaurant(id);
  return (
    <div style={{ flex: 1, flexDirection: "row" }}>
      <h1>Restaurant id: {id}</h1>
      {Restaurant ? (
        <div className="card">
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              Restaurant?.cloudinaryImageId
            }
            alt="image_"
          />
          <h2>{Restaurant?.name}</h2>
          <h4>{Restaurant?.cuisines?.join(", ")}</h4>
          <h4>{Restaurant?.areaName}</h4>
          <span>
            <h4>
              <i className="fa-solid fa-star"></i>
              {Restaurant?.avgRating}
            </h4>
            <h4>{Restaurant?.sla?.lastMileTravelString}</h4>
            <h4>{Restaurant?.costForTwoString}</h4>
          </span>
        </div>
      ) : (
        <ShimmerCard />
      )}
      {RecommendedItems ? (
        RecommendedItems.map((item) => {
          return <h6>{item?.card?.info?.name}</h6>;
        })
      ) : (
        <ShimmerCard />
      )}
    </div>
  );
}

export default RestaurantMenu;
