import Navbar from "../components/Navbar";

import Home from "./home";

const main = () => {
  return (
    <>
      <div className="">
        <Navbar setSearch={true} />
      </div>
      <div className="grid grid-flow-col-dense m-5">
        <div>
          <Home />
        </div>
      </div>
    </>
  );
};

export default main;
