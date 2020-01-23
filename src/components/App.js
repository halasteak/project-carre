import React, { Fragment } from "react";
import TopHeader from "./top-header";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./app-header";

const App = () => {
  return (
    <Fragment>
    <TopHeader></TopHeader>
      <AppHeader></AppHeader>
    </Fragment>
  );
};
export default App;
