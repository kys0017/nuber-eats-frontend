import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app";
import { ApolloProvider } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import { client } from "./apollo";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
