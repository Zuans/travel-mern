import React from "react";

import Star from "elements/Star";
import Button from "elements/Button";
import testimoniAccent from "assets/images/img-testimoni-landing-frame.jpg";

export default function Testimoni({ data }) {
  return (
    <section className="container">
      <div className="row">
        <div
          className="col-auto align-items-center"
          style={{ marginRight: 70 }}
        >
          <div
            className="testimoni-hero"
            style={{ margin: `30px 0px 0px 30px ` }}
          >
            <img
              src={testimoniAccent}
              alt="Testimoni frame"
              className="position-absolute"
              style={{ margin: `-30px 0px 0px -30px ` }}
            />
            <img
              src={data.imageUrl}
              alt={data.name}
              className="position-absolute"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
        <div className="col">
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} height={30} width={30} spacing={5}></Star>
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h5>
          <span className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </span>
          <div>
            <Button
              href={`/testimonial/${data._id}`}
              className="btn px-5"
              isPrimary
              hasShadow
              type="link"
              style={{ marginTop: 40 }}
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
