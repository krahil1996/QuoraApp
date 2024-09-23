import Lbar from "./Lbar";
import Middle from "./Middle";
import Rbar from "./Rbar";


const Home = () => {
  return (
    <div className="grid grid-flow-col-dense m-5">
      <div className="flex justify-self-end w-52">
        <Lbar />
      </div>
      <div>
        <Middle/>
      </div>
      <div className="flex justify-self-start ">
        <Rbar />
      </div>
    </div>
  );
};

export default Home;
