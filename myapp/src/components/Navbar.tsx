
// custome css style 
import "../App.css";
import logo from "../assets/Navicon/quora.png"
import Home from "../assets/Navicon/home.png"
import Following from "../assets/Navicon/clipboard.png"
import Answer from "../assets/Navicon/edit.png"
import Spaces from "../assets/Navicon/group.png"
import Notifications from "../assets/Navicon/bell.png"
import search from "../assets/Navicon/lens.png"
import Profile from "../assets/Navicon/account.png"
import Languages from "../assets/Navicon/globe.png"
import Avatar from "react-avatar"
import { auth } from "../firebase/setup"
import account from "../assets/account.png"
import PostPopup from "./PostPopup"
import { useState } from "react"

type searchProp = {
  setSearch: any
}
const Navbar = (props: searchProp) => {
  const [post, setPost] = useState(false)
  return (
    <div className="shadow-md w-screen bg-white ">
      <div className="flex items-center justify-center gap-5 h-14 ">
        <img className="w-22 h-6 " src={logo} alt="logo" />
        <div className="flex flex-row ">
          <div className="p-4 rounded-lg h-14 hover:bg-zinc-100 cursor-pointer transition-all ease-in-out ">
            <img style={{ height: "24px", width: "24px" }} src={Home} alt="home" /></div>
          <div className="p-4 rounded-lg h-14  hover:bg-zinc-100 cursor-pointer transition-all ease-in-out ">
            <img style={{ height: "24px", width: "24px" }} src={Following} alt="following" /></div>
          <div className="p-4 rounded-lg h-14 hover:bg-zinc-100 cursor-pointer transition-all ease-in-out  ">
            <img style={{ height: "24px", width: "24px" }} src={Answer} alt="answer" /></div>
          <div className="p-4 rounded-lg h-14 hover:bg-zinc-100 cursor-pointer transition-all ease-in-out  ">
            <img style={{ height: "24px", width: "24px" }} src={Spaces} alt="spaces" /></div>
          <div className="p-4 rounded-lg h-14 hover:bg-zinc-100 cursor-pointer transition-all ease-in-out  ">
            <img style={{ height: "24px", width: "24px" }} src={Notifications} alt="notifications" /></div>
        </div>
        <div className=" w-72 border border-spacing-0 hover:border-blue-700 transition-all ease-in-out rounded-ssm  ">
          <div className="flex items-center p-1 " >
            <img className="p-1" style={{ height: "22px", width: "22px" }} src={search} alt="" />
            <input className="w-72 outline-none " type="text" name="search" id="" placeholder="Search Quora"
            />
          </div>
        </div>
        <div className="p-4 rounded-lg h-14  hover:bg-zinc-100 cursor-pointer transition-all ease-in-out ">
          <img style={{ height: "24px", width: "24px" }} src={Profile} alt="profile" /></div>
        <div className="p-4 rounded-lg h-14  hover:bg-zinc-100 cursor-pointer transition-all ease-in-out  ">
          <img style={{ height: "24px", width: "24px" }} src={Languages} alt="language" /></div>

      </div>
    </div>
  );
};

export default Navbar;