import "./pez.css";

import React, { Component } from "react";

import { connect } from "react-redux";

class Pez extends Component {
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

    const s = size + spacing + spacing + borderWidth + borderWidth;

    return (
      <div
        className={`pez-frame`}
        style={{
          width: s,
          height: s
        }}
        onClick={() => {
          const { colors, color } = this.state;
          const index = colors.indexOf(color);
          const next = index + 1;

          this.setState({
            color: this.props.palette.selectedColor
          });
        }}
      >
        <div
          className={`pez ${color}`}
          style={{
            borderWidth: borderWidth,
            width: size,
            height: size,
            margin: spacing
          }}
        />
      </div>
    );
  }
}

export default connect(state => {
  return {
    palette: state.palette
  };
})(Pez);
