import React from "react";

import IconText from "parts/IconText";
import Button from "elements/Button";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <IconText />
            <p className="brand-tagline mt-2 font-weight-light text-gray-500">
              We kaboom your beauty holiday instantly and memoriable
            </p>
          </div>
          <div className="col-2 mx-5">
            <h6>For Beginners</h6>
            <ul className="list-group- list-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Starting Booking house
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6>About</h6>
            <ul className="list-group- list-flush">
              <li className="list-group-item">
                <Button type="link" href="/about">
                  About
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy & Policy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3 mr-5">
            <h6>Contact</h6>
            <ul className="list-group- list-flush">
              <li className="list-group-item">
                <Button
                  type="link"
                  isExternal
                  href="emailto:staycationah@gmail.com"
                >
                  staycationah@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" isExternal href="tel:+6288432940329">
                  +62 8843-2940-329
                </Button>
              </li>
              <li className="list-group-item">
                <span> Jln.Marga Satwa no.21 Bandung, Indonesia </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col copyrights">
            Copyright 2023 All right reserved - Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
