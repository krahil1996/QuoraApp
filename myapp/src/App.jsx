import "./App.css";
import Signup from "./components/Signup";
import EmailSignup from "./components/EmailSignup";
import NavBar from "./components/Navbar"
import { useState } from "react";

const App = () => {

  return (
    <div>

      <div className="fixed">
        <NavBar />
      </div>
      {/* <Signup /> */}
    </div>

  )
};

export default App;
