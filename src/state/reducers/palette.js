import createReducer from "./create-reducer";

const initial = {
  selectedColor: "white",
  colors: [
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

const reducers = {
  CHANGE_PALETTE_COLOR: (state, value) => {
    return {
      ...state,
      ...{
        selectedColor: value
      }
    };
  }
};

export default createReducer(initial, reducers);
