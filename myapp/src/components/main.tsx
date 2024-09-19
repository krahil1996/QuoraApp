import React from "react";
import Navbar from "../components/Navbar";

const main = () => {
  return (
    <div className="fixed">
      <Navbar setSearch={true} />
    </div>
  );
};

export default main;
