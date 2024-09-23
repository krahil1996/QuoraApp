
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/index" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
