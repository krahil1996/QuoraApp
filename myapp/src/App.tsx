import "./App.css";
import Signup from "./components/Signup";
import EmailSignup from "./components/EmailSignup";
import NavBar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [navbar, setNavbar] = useState(true);
  return (
    <div>
      <Signup />
      <div>
        <div className="fixed">
          <NavBar setSearch={""} />
        </div>
      </div>

      <div>{navbar ? <App setNavbar={setNavbar} /> : ""}</div>
    </div>
  );
};

export default App;
