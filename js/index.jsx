import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
import sliders from "../config/sliders";

ReactDOM.render(<App sliders={sliders} />, document.getElementById("app"));
