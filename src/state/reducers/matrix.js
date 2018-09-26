import createReducer from "./create-reducer";

let initial = {
  gridModel: [],
  width: 38,
  height: 24
};

function initializePezGridModel() {
  const gridWidthAmount = initial.width || 30;
  const gridHeightAmount = initial.height || 20;

  var gridModelX = Array.apply(null, { length: gridWidthAmount }).map(
    Number.call,
    Number
  );

  var gridModel = gridModelX.map(gm => {
    return Array.apply(null, { length: gridHeightAmount })
      .map(Number.call, Number)
      .map((val, i) => {
        return {
          row: gm,
          column: val,
          color: ""
        };
      });
  });

  console.log(gridModel);

  return gridModel;
}

initial.gridModel = initializePezGridModel();

const reducers = {
  UPDATE_MATRIX_GRIDMODEL: (state, value) => {
    return {
      ...state,
      ...{
        gridModel: value
      }
    };
  }
};

export default createReducer(initial, reducers);
