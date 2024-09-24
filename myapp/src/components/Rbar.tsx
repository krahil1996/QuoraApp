import "../App.css"; // Optional: if you have a CSS file for styling
import Add from "../assets/Add.png";

const Rbar = () => {
  return (
    <div className=" h-full">
      <div className="border rounded-lg">
        <div>
          <img className="w-72 h-72 p-3" src={Add} alt="" />
        </div>
        <div>
          <img className="w-72 h-72 p-3 " src={Add} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Rbar;
