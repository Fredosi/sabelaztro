import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import ZodiacSignProvider from "./contexts/ZodiacSignContext";
import ZodiacInfoProvider from "./contexts/ZodiacInfoContext";
import FactsProvider from "./contexts/FactsContext";

ReactDOM.render(
  <BrowserRouter>
    <ZodiacInfoProvider>
      <ZodiacSignProvider>
        <FactsProvider>
          <App />
        </FactsProvider>
      </ZodiacSignProvider>
    </ZodiacInfoProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
