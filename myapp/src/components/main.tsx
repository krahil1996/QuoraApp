import React from "react";
import Navbar from "../components/Navbar";
import Lbar from "./Lbar";
import Rbar from "./Rbar";
import Home from "./Middle";

const main = () => {
  return (
    <>
      <div className="">
        <Navbar setSearch={true} />
      </div>
      <div className="grid grid-flow-col-dense m-5">
        <div className="flex justify-self-end w-52">
          <Lbar />
        </div>
        <div>
          <Home />
        </div>
        <div className="flex justify-self-start ">
          <Rbar />
        </div>
      </div>
    </>
  );
};

export default main;
