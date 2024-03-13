import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/alt-text */
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwoString,
    avgRating,
    id
  }) => {
    return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <Link to={`/restaurant/${id}`}>
      <div className="p-2 bg-blue-100 m-5 w-60 rounded-md shadow-md">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          className=""
        />
        <h2 className="font-bold text-lg justify-center">{name}</h2>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{areaName}</h4>
        <span>
          <h4>
            <i className="fa-solid fa-star"></i>
            {avgRating}
          </h4>
          <h4>{sla?.lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </div>
      </Link>
    );
  };

export default RestaurantCard;