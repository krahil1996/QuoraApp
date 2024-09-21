import { useState } from "react";
import Navbar from "./Navbar";
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
