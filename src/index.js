import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./Router";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <>
    <ColorModeScript />
    <App />
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();

reportWebVitals();
