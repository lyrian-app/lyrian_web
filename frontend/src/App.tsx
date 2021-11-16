import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { AppProvider } from "./providers";
import { AppRoute } from "./routes";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <AppRoute />
      </AppProvider>
    </div>
  );
}

export default App;
