import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import App from "../../App";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import AboutUsPage from "../../pages/AboutUs.jsx/AboutUs";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<WelcomePage />} />
        <Route path="/homepage" element={<App />} />
        <Route path="/favourites" element={<App />} />
        <Route path="/authentication" element={<App />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactpage" element={<App />} />
        <Route path="/privatepolicy" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
