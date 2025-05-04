import { BrowserRouter, Router, Routes } from "react-router-dom";
import React from "react";
import App from "../../App";
import "../../src/index.css";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<App />} />
        <Route path="/homepage" element={<App />} />
        <Route path="/favourites" element={<App />} />
        <Route path="/authentication" element={<App />} />
        <Route path="/aboutus" element={<App />} />
        <Route path="/contactpage" element={<App />} />
        <Route path="/privatepolicy" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
