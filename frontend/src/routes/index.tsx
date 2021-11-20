import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Edit } from "../pages/edit";
import { Fix } from "../pages/fix";
import { LandingPage } from "../pages/lp";
import { Lyrics } from "../pages/lyrics";
import { Save } from "../pages/save";
import { Start } from "../pages/start";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/start" element={<Start />} />
        <Route path="/fix" element={<Fix />} />
        <Route path="/save" element={<Save />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/lyrics" element={<Lyrics />} />
      </Routes>
    </BrowserRouter>
  );
};
