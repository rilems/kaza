import React from "react";

import redstar from "../assets/redStar.svg";
import greystar from "../assets/greyStar.svg";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={redstar}
            alt="redstar"
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src={greystar}
            alt="greystar"
          />
        )
      )}
    </div>
  );
};

export default Rating;