import "./index.css";

import App from "./components/app";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import store from "./state/store";

const application = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(application, document.getElementById("root"));
registerServiceWorker();
