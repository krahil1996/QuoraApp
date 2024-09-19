import "../App.css";  // Optional: if you have a CSS file for styling
import Add from "../assets/Add.png";

const rightbar = () => {
    return (
        <div className="border-2 border-gray-300 w-72 h-full ml-24 bg-slate-100 shadow-lg">
            <div>
                <img className="w-72 h-72 p-3" src={Add} alt="" />
            </div>
            <div>
            <img className="w-72 h-72 p-3 " src={Add} alt="" />
            </div>

        </div>
    );
}

export default rightbar;