import Clubs from "./components/clubs/Clubs";
import Events from "./components/evnts/Events";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/about/AboutUs";
import Explore from "./components/clubs/Explore";
import Register from "./components/clubs/Register";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Create from "./components/evnts/Create";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/clubs" exact element={<Clubs />} />
          <Route path="/events" exact element={<Events />} />
          <Route path="/about" exact element={<AboutUs />} />
          <Route path="/clubs/explore" exact element={<Explore />} />
          <Route path="/clubs/register" exact element={<Register />} />
          <Route path="/create-event" exact element={<Create />} />
          <Route path="/dashboard" exact element={<Dashboard/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
