import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import HomePage from './pages/homePage';
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Dashboard from "./pages/Dashboard";
import TeamDetailsPage from './pages/TeamDetailsPage';
import SiteHeader from './components/siteHeader';

import Navigation from "./components/nav/navigation";


const App = () => {
  return (
    <BrowserRouter>
          <Navigation />
      <Routes>
        <Route path="/team/:id" element={<TeamDetailsPage/>} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
