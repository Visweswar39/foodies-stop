import React from 'react'
import { Shimmer } from 'react-shimmer';

function ShimmerCard() {
  return (
    <div className="shimmerCard">
        <div className='image-div' />
        <Shimmer width={200} height={100}/>
        {/* <h2>{name}</h2>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{areaName}</h4>
        <span>
          <h4>
            <i className="fa-solid fa-star"></i>
            {avgRating}
          </h4>
          <h4>{sla?.lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span> */}
      </div>
  )
}

export default ShimmerCard;