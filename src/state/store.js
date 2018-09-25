import { createStore } from "redux";
import reducers from "./reducers";

let store = createStore(reducers);
const { dispatch, getState, subscribe } = store;

export default store;
export { dispatch, getState, subscribe };
