import "./palette.css";

import React, { Component } from "react";

class PaletteColor extends Component {
  selectPaletteColor() {}

  render() {
    const activeclass = "inactive";
    return (
      <div onClick={this.selectPaletteColor}>
        <div className={`palette pez ${this.props.color} ${activeclass}`} />
      </div>
    );
  }
}

export default class Palette extends Component {
  state = {
    color: "",
    colors: [
      "",
      "white",
      "yellow",
      "red",
      "purple",
      "orange",
      "green",
      "pink",
      "blue"
    ]
  };
  render() {
    const { size, borderWidth, spacing } = this.props;
    const { color } = this.state;
    return (
      <div className={`palette-frame`}>
        <div
          className={`pez ${color}`}
          style={{
            borderWidth: borderWidth,
            width: size,
            height: size,
            margin: spacing
          }}
        />
        {this.state.colors.map((color, index) => {
          return <PaletteColor color={color} />;
        })}
      </div>
    );
  }
}
