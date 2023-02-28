import React from "react";
import { Fade } from "react-awesome-reveal";

import Button from "elements/Button";

import imgHero from "assets/images/img-hero.jpg";
import imgHero_ from "assets/images/img-hero-frame.jpg";
import iconCitites from "assets/images/icons/ic_cities.svg";
import iconTravel from "assets/images/icons/ic_travel.svg";
import iconTreasure from "assets/images/icons/ic_treasure.svg";

import getFormatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <Fade>
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 480 }}>
            <h1
              className="font-weight-bold line-height-1 mb-3"
              style={{ lineHeight: "63px" }}
            >
              Forget Busy Work <br />
              Start Next Vacation
            </h1>
            <p
              className="font-weight-light text-gray-500 w-75 mb-5"
              style={{ lineHeight: "170%" }}
            >
              We Provide what you need to enjoy your vacation, time to make
              memorable memories cause money can be return but not with time
            </p>
            <Button
              className="btn px-5"
              isPrimary
              hasShadow
              onClick={showMostPicked}
            >
              Show Me
            </Button>
            <div className="row" style={{ marginTop: "80px" }}>
              <div className="col-auto">
                <img
                  widht="36"
                  height="36"
                  src={iconTravel}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  {getFormatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  widht="36"
                  height="36"
                  src={iconTreasure}
                  alt={`${props.data.treasures} treasures`}
                />
                <h6 className="mt-3">
                  {getFormatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  widht="36"
                  height="36"
                  src={iconCitites}
                  alt={`${props.data.cities} cities`}
                />
                <h6 className="mt-3">
                  {getFormatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5" style={{ width: 520, height: 410 }}>
            <div>
              <img
                src={imgHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={imgHero_}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
