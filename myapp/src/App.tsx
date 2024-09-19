import "./App.css";
import Signup from "./components/Signup";
import EmailSignup from "./components/signInMethod/EmailSignup";
import { useState } from "react";

const App = () => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default App;
