import React from "react";

import { AppProvider } from "./providers";
import { AppRoute } from "./routes";

import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <AppRoute />
        <Footer />
      </AppProvider>
    </div>
  );
}

export default App;
