import React, { Fragment } from "react";
import TopHeader from "./top-header";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./app-header";
import ReactGA from "react-ga";
// import auth from "./auth.ts"; // Sample authentication provider
import AppCarousel from "../components/app-carousel";
import DomainDActivite from "./domain-d-activite";

const trackingId = "UA-157135052-1";

// ReactGA.set({
//   userId: auth.currentUserId()
// });

const App = () => {
  try {
    ReactGA.initialize(trackingId);
    console.log("ini ga with id ", trackingId);
  } catch (e) {
    console.error("init analytics error", e);
  }
  return (
    <Fragment>
      <TopHeader></TopHeader>
      <AppHeader></AppHeader>
      <AppCarousel></AppCarousel>
      <DomainDActivite></DomainDActivite>
    </Fragment>
  );
};
export default App;
