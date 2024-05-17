import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import LandingPage from "./pages/landingPage/landingPage";
import History from "./pages/History/History";
import Sponsors from "./pages/Sponsors/Sponsors.jsx";
import Photos from "./pages/Photos/Photos.jsx";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Admin from "./pages/Admin/Admin";
import News from "./pages/News/News";
import ProgrammeDuWeekEnd from "./pages/ProgrammeDuWeekEnd/ProgrammeDuWeekEnd";
import TeamsPage from "./pages/Teams/Teams";
import TeamPresentation from "./pages/TeamPresentation/TeamPresentation";
import OrganigrammeDuClub from "./pages/OrganigrammeDuClub/OrganigrammeDuClub";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import Contact from "./pages/Contact/Contact";

export const isLoggedInContext = createContext();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const serverURL = import.meta.env.VITE_REACT_APP_SERVER;

  useEffect(() => {
    const verifyUser = async () => {
      const response = await axios.get(`${serverURL}/api/verifyUser`, {
        withCredentials: true,
      });
      setIsLoggedIn(response.data.isLoggedIn);
      setIsAdmin(response.data.isAdmin);
    };
    verifyUser();
  }, []);

  return (
    <isLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn, isAdmin }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-panel" element={<Admin />} />
          <Route path="/news" element={<News />} />
          <Route
            path="/programme-du-weekend"
            element={<ProgrammeDuWeekEnd />}
          />
          <Route path="/equipes" element={<TeamsPage />} />
          <Route path="/equipes/:id" element={<TeamPresentation />} />
          <Route
            path="/organigramme-du-club"
            element={<OrganigrammeDuClub />}
          />
          <Route path="/verifyEmail/:email/:token" element={<VerifyEmail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </isLoggedInContext.Provider>
  );
}
