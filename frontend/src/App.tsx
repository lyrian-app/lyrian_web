import React from "react";

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
