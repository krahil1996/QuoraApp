import "../App.css"; // Optional: if you have a CSS file for styling

const Lbar = () => {
  return (
    <div className="h-auto flex flex-col ">
      <div className=" flex flex-row rounded-sm bg-gray-200 text-gray-500 p-2 hover:bg-gray-300 transition-all ease-in-out cursor-pointer  ">
        <div className="flex px-1 gap-2">
          <div className=" ">
            <button>+</button>
          </div>
          <div>
            <button> Create Space </button>
          </div>
        </div>
        <div className="flex flex-row">
          <img src="" alt="" />
          <h3></h3>
        </div>
      </div>
       
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
