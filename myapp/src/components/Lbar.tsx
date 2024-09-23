import Health from "../assets/health.jpg"
import Animal from "../assets/animals.jpg"
import Finance from "../assets/finance.jpg"
import Living from "../assets/living.jpg"
import Science from "../assets/science.jpg"
import Tech from "../assets/tech.jpg"

import "../App.css"; // Optional: if you have a CSS file for styling

const Lbar = () => {
  return (
    <div className="h-auto flex flex-col ml-32">
      <div className=" flex flex-row rounded-sm bg-gray-200 text-gray-500 p-2 hover:bg-gray-300 transition-all ease-in-out cursor-pointer  ">
        <div className="flex px-1 gap-2">
          <div className=" ">
            <button>+</button>
          </div>
          <div>
            <button> Create Space </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-1 my-2">
        <div className="flex flex-row p-1 rounded-sm hover:bg-gray-300 transition-all ease-in-out cursor-pointer  ">
          <img className="p-1 rounded-lg w-7 h-7" src={Health} alt={Health} />
          <h4 className=" w-full text-gray-400 text-wrap ">Health</h4>
        </div>
        <div className="flex flex-row p-1 rounded-sm hover:bg-gray-300 transition-all ease-in-out cursor-pointer  ">
          <img className="p-1 rounded-lg w-7 h-7" src={Health} alt={Health} />
          <h4 className=" w-full text-gray-400 text-wrap ">Health</h4>
        </div>
      </div>
      <hr className="mt-3" />

      <div className="p-4">
        <div className="text-gray-400">
          <ul>
            <li>
              About <span>{"•"}</span> Careers <span>{"•"} </span>
            </li>
            <li>
              Terms <span>{"•"}</span> Privacy <span>{"•"} </span>
            </li>
            <li>
              Acceptable Use <span>{"•"}</span>
            </li>
            <li>
              Advertise <span>{"•"}</span> Press <span>{"•"} </span>
            </li>
            <li>
              Your ad Choice <span>{"•"} </span>
            </li>
            <li>Grivence Officer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lbar;
