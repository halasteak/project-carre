import React, { Fragment } from "react";
import TopHeader from "./top-header";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./app-header";
import ReactGA from "react-ga";
// import auth from "./auth.ts"; // Sample authentication provider

const trackingId = "UA-157135052-1";
ReactGA.initialize(trackingId);
// ReactGA.set({
//   userId: auth.currentUserId()
// });

const App = () => {
  return (
    <Fragment>
      <TopHeader></TopHeader>
      <AppHeader></AppHeader>
    </Fragment>
  );
};
export default App;
