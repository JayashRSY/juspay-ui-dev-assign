import React from "react";
import ReactDOM from "react-dom/client";
import { persistor, store } from "./store/store";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);