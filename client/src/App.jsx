import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAcccount";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/home" element={<DashBoard />} />
      </Routes>
    </div>
  );
};

export default App;
