import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../components/config";
const useRestaurant = (id) => {

  const [Restaurant, setRestaurant] = useState();
  const [RecommendedItems, setRecommendedItems] = useState();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(RESTAURANT_MENU_URL + id);
      const json = await data.json();
      setRestaurant(json?.data?.cards[0]?.card?.card?.info);
      setRecommendedItems(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      );
    } catch (err) {
      console.log(err);
    }
  }
  
  return [Restaurant, RecommendedItems];
};

export default useRestaurant;
