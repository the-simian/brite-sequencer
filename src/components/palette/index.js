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
  render() {
    const { palette, dispatch } = this.props;

    return (
      <div className={`palette-frame`}>
        {palette.colors.map((color, index) => {
          return (
            <PaletteColor
              key={`palette=${color}`}
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
