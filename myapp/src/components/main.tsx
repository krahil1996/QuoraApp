import React from "react";
import Navbar from "../components/Navbar";
import Lbar from "./Lbar";
import Rbar from "./Rbar";
import Home from "./home";

const main = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="h-screen w-screen">
        <Navbar setSearch={setSearch} />
        <Home search={search} />
      </div>
    </>
  );
};

export default main;
