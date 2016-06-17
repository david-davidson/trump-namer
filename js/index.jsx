import analytics from "react-ga";
import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
import sliders from "../config/sliders";

analytics.initialize("UA-36686836-2");

ReactDOM.render(<App sliders={sliders} />, document.getElementById("app"));
