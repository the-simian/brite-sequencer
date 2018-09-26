import "./index.css";

import React, { Component } from "react";

import Pez from "../pez";
import { connect } from "react-redux";
import { updateMatrixGridModel } from "../../state/actions";

const PEZ_SIZE = 16;
const BORDER_SIZE = 1.5;
const SPACING_SIZE = 3;

class Matrix extends Component {
  makePezGrid() {
    const { matrix } = this.props;
    return matrix.gridModel.map((gmx, i) => {
      const row = gmx.map((gmy, ii) => {
        return (
          <Pez
            key={`pez-${i}_${ii}`}
            size={PEZ_SIZE}
            borderWidth={BORDER_SIZE}
            spacing={SPACING_SIZE}
          />
        );
      });

      return (
        <div key={`row-${i}`} className={`matrix-row`}>
          {row}
        </div>
      );
    });
  }

  render() {
    const pezGrid = this.makePezGrid();

    return (
      <div className="matrix" style={{ display: "flex" }}>
        {pezGrid}
      </div>
    );
  }
}

export default connect(state => {
  return {
    matrix: state.matrix
  };
})(Matrix);
