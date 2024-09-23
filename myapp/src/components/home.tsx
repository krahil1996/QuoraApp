import Lbar from "./Lbar";

import Rbar from "./Rbar";
import Middle from "./Middle";

const Home = () => {
  return (
    <div className="flex flex-row m-5 gap-3">
      <div className="flex w-1/5">
        <Lbar />
      </div>
      <div className="flex w-3/5">
        <Middle />
      </div>
      <div className="flex justify-self-start w-1/5 ">
        <Rbar />
      </div>
    </div>
  );
};

export default Home;
