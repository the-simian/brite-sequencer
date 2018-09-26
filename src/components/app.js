import "./app.css";

import React, { Component } from "react";

import Matrix from "./matrix";
import Palette from "./palette";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Matrix />
        <Palette />
      </div>
    );
  }
}
