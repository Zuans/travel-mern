import React, { Component } from "react";
import Header from "parts/Header";
import landingPageJson from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimoni from "parts/Testimoni";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
    console.log(landingPageJson);
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPageJson.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPageJson.mostPicked}
        />
        <Categories data={landingPageJson.categories} />
        <Testimoni data={landingPageJson.testimonial} />
        <Footer />
      </>
    );
  }
}
