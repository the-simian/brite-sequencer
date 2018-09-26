import createReducer from "./create-reducer";

const initial = {
  selectedColor: ""
};

const reducers = {
  CHANGE_PALETTE_COLOR: (state, value) => {
    return {
      selectedColor: value
    };
  }
};

export default createReducer(initial, reducers);
