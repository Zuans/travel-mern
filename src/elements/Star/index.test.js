import React from "react";

import { render } from "@testing-library/react";
import Star from "./index";

test("Should have the correct props [value, height, width and spacing]", () => {
  const value = 3.3;
  const height = 40;
  const width = 20;
  const spacing = 5;
  const { container } = render(
    <Star value={value} height={height} width={width} spacing={spacing}></Star>
  );

  const starYellow = "div.stars div.star:not(.placeholder)";

  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.querySelector("div.stars")).toHaveStyle(
    `height: ${height}px`
  );
  expect(container.querySelector(starYellow)).toBeInTheDocument();
  expect(container.querySelector(starYellow)).toHaveStyle(
    `height: ${height}px`
  );
  expect(container.querySelector(starYellow)).toHaveStyle(`width: ${width}px`);
});
