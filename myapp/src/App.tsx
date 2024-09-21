import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import Signup from "./components/Signup";
import Popup from "./components/PostPopup";

const App = () => {
  return (
<<<<<<< HEAD
    <div>

      <div className="">
        {/* <Home /> */}
      </div>
      <Main />
    </div>
=======
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/index" element={<Main />} />
      </Routes>
    </>
>>>>>>> main
  );
};

export default App;
