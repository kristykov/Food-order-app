import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { AuthContextProvider } from "./store/auth-context";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import "./styles.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // <AuthContextProvider>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // </AuthContextProvider>,
);
