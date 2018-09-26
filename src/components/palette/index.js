import "./palette.css";

import React, { Component } from "react";

import { changePaletteColor } from "../../state/actions";
import { connect } from "react-redux";

class PaletteColor extends Component {
  selectPaletteColor = color => () => {
    const { dispatch } = this.props;

    dispatch(changePaletteColor(color));
  };

  render() {
    const { color, selectedColor } = this.props;

    const activeclass = selectedColor === color ? "active" : "inactive";
    return (
      <div className="palette-color" onClick={this.selectPaletteColor(color)}>
        <div className={`palette pez ${color} ${activeclass}`} />
      </div>
    );
  }
}
class Palette extends Component {
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
    const { size, borderWidth, spacing, palette, dispatch } = this.props;
    const { color } = this.state;
    return (
      <div className={`palette-frame`}>
        {this.state.colors.map((color, index) => {
          return (
            <PaletteColor
              color={color}
              selectedColor={palette.selectedColor}
              dispatch={dispatch}
            />
          );
        })}
      </div>
    );
  }
}

export default connect(state => {
  return {
    palette: state.palette
  };
})(Palette);
