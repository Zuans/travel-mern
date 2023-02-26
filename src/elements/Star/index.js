import React from "react";

import propTypes from "prop-types";
import "./index.scss";

export default function Star({ value, height, width, spacing }) {
  const decimal = Number(value) % 1;
  let leftPos = 0;
  const star = [];
  for (let index = 0; index < 5 && index < value - decimal; index++) {
    leftPos += width;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  if (decimal > 0 && value < 5) {
    star.push(
      <div
        className="star decimal"
        key="star-decimal"
        style={{
          left: leftPos,
          width: width * decimal,
          height: height,

          marginRight: spacing,
        }}
      ></div>
    );
  }

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`star-placeholder-${index}`}
        style={{
          left: index * width,
          width: width,
          height: height,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  return (
    <>
      <div className="stars" style={{ height: height }}>
        {star}
        {starPlaceholder}
      </div>
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  height: propTypes.number,
  width: propTypes.number,
  spacing: propTypes.number,
};
