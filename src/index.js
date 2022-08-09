import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from './pages/homePage';
import TeamDetailsPage from './pages/teamDetailsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/team/:id" element={<TeamDetailsPage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));