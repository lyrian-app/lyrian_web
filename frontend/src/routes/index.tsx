import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Edit } from "../components/page/edit";
import { Fix } from "../components/page/fix";
import { LandingPage } from "../components/page/lp";
import { Lyrics } from "../components/page/lyrics";
import { Save } from "../components/page/save";
import { Start } from "../components/page/start";

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
