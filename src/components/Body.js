import React, { useEffect } from "react";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./Shimmer/ShimmerCard";
import useOnline from "../utils/useOnline";

const searchItems = (query, restaurantList) => {
  return restaurantList.filter((item) => {
    console.log(item);

    return item.info.name.toLowerCase().includes(query.toLowerCase());
  });
};

const Body = () => {
  const [query, setQuery] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const isOnline = useOnline();
  // console.log(isOnline);

  useEffect(() => {
    getRestaurantsData();
  }, []);

  async function getRestaurantsData() {
    try {
      let data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.67740&lng=83.20360&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      let json = await data.json();
      setRestaurantList(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
      setRestaurants(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
      console.log(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0]
          .info
      );
    } catch (e) {
      console.log(e);
    }
  }

  if(isOnline===false){
    return <h1>you are offline</h1>
  }

  // window.addEventListener('offline',(event)=>{
  //   console.log('online');
  // })

  return (
    <div>
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            setRestaurants(searchItems(query, restaurantList));
          }}
        >
          search
        </button>
      </div>
      {restaurantList.length > 0 ? (
        <div className="restaurant-list">
          {restaurants.length === 0 ? (
            <h1>sorry no restaurants</h1>
          ) : (
            restaurants.map((item) => {
              return <RestaurantCard {...item?.info} key={item?.info?.id} />;
            })
          )}
        </div>
      ) : (
        <div className="restaurant-list">
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
        </div>
      )}
    </div>
  );
};

export default Body;
