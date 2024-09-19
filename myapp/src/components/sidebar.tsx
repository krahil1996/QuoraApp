import "../App.css";  // Optional: if you have a CSS file for styling


const sidebar = () => {
  return (
    
      <div className="w-125px bg-slate-100 h-screen mt-14 ml-28">
        <div className=' flex flex-row box-border bg-slate-200 text-gray-600 p-2 m-3 w-45 '>
          <div className="mr-3"> <button>+</button> </div>
          <div> <button> Create Space </button></div>
        </div>
        <div className="text-gray-600 p-1"><hr /></div>

        <div className="p-4">
          <div className="text-gray-400">
          <ul>
            <li>About <span>{"•"}</span> Careers <span>{"•"} </span></li>
            <li>Terms <span>{"•"}</span> Privacy <span>{"•"} </span></li>
            <li>Acceptable Use <span>{"•"}</span></li>
            <li>Advertise <span>{"•"}</span> Press <span>{"•"} </span></li>
            <li>Your ad Choice <span>{"•"} </span></li>
            <li>Grivence Officer</li>

          </ul>

          </div>
        </div>
      </div>
  );
}

export default sidebar;