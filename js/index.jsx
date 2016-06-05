import React from "react";

import App from "./app";
import sliders from "./slider-config";

React.render(<App sliders={sliders} />, document.getElementById("app"));
