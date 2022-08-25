import React from "react";
import ReactDOM from "react-dom/client";
/*react router dom */
import { BrowserRouter } from "react-router-dom";
import { Digitize } from "./Digitize";
import { GlobalContextProvider } from "./context/GlobalContextProvider";
import "./normalize/normalize.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalContextProvider>
      <Digitize />
    </GlobalContextProvider>
  </BrowserRouter>
);
