import "../App.css"; // Optional: if you have a CSS file for styling
import Add from "../assets/Add.png";
import Gif from "../assets/Navicon/gif.gif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Rbar = () => {
  return (
    <div className=" ml-4 h-full">
      
      <div className="border rounded-lg">
      <div className="text-right"><div className="justify-between "><button className="text-gray-500 text-sm"><FontAwesomeIcon icon={faTimes} /></button> </div></div>
        <div>
          <img className="w-80 h-72 p-3" src={Gif} alt="" />
        </div>
        <div>
        <div className="text-right"><div className=" justify-between "><button className="text-gray-500 text-sm"><FontAwesomeIcon icon={faTimes} /></button> </div></div>
          <img className="w-80 h-72 p-3 " src={Add} alt="" />
        </div>
        <div className="bg-white text-sm text-center text-gray-500 p-2">Advertisement</div>
      </div>
    </div>
  );
};

export default Rbar;
