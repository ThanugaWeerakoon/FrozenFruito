import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import App from "./App.jsx";
import "./index.css";

const Main = () => (
  <>
    <Helmet>
      <title>Great Frozen | Premium Frozen Foods</title>
      <meta
        name="description"
        content="Shop premium frozen foods at Great Frozen. Quality products for your meals!"
      />
      <meta
        name="keywords"
        content="Frozen foods, premium, quality, Great Frozen, meals"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Great Frozen" />
      <meta property="og:title" content="Great Frozen | Premium Frozen Foods" />
      <meta
        property="og:description"
        content="Shop premium frozen foods at Great Frozen. Quality products for your meals!"
      />
      <meta property="og:url" content="https://greatfrozen.com" />
      <meta property="og:type" content="website" />
    </Helmet>
    <App />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
