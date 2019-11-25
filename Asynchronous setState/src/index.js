import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App increment={1} />, rootElement);
