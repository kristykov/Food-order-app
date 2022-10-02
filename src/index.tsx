import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { AuthContextProvider } from "./store/auth-context";
import store from "./store/store";
import App from "./App";
import "./styles.scss";

const persistor = persistStore(store);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AuthContextProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </AuthContextProvider>,
);
