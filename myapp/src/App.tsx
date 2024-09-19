import "./App.css";
import Signup from "./components/Signup";
import EmailSignup from "./components/EmailSignup";
import NavBar from "./components/Navbar"
import Sidebar from "./components/sidebar"
import Rightbar from "./components/rightbar"
import Home from "./components/home"
import { useState } from "react";

const App = () => {
  return (
    <div>

      <div className="fixed">
        {/* <Home /> */}
      </div>
      <Signup />
    </div>
  );
};

export default App;
