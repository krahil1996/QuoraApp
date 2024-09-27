// custome css style
import "../App.css";
import logo from "../assets/Navicon/quora.png";
import Home from "../assets/Navicon/home.png";
import Following from "../assets/Navicon/clipboard.png";
import Answer from "../assets/Navicon/edit.png";
import Spaces from "../assets/Navicon/group.png";
import Notifications from "../assets/Navicon/bell.png";
import search from "../assets/Navicon/lens.png";
import Languages from "../assets/Navicon/globe.png";
import account from "../assets/Navicon/account.png";
import { useState } from "react";
import Avatar from "react-avatar";
import { auth } from "./firebase/Setup";
import PostPopup from "./PostPopup";

type searchProp = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSearch: any;
};
const Navbar = (props: searchProp) => {
  const [post, setPost] = useState(false);
  return (
    <div className="shadow-md max-w-screen-full bg-white">
      <div className="flex items-center justify-center flex-wrap gap-5 h-auto">
        <img className="w-22 h-6 " src={logo} alt="logo" />
        <div className="flex flex-row ">
          <div className="p-4 rounded-md h-14 hover:bg-zinc-100 cursor-pointer transition-all ease-in-out">
            <img
              style={{ height: "24px", width: "24px" }}
              src={Home}
              alt="home"
            />
          </div>
          <div className="p-4 rounded-md h-14  hover:bg-zinc-100 cursor-pointer transition-all ease-in-out ">
            <img
              style={{ height: "24px", width: "24px" }}
              src={Following}
              alt="following"
            />
          </div>
          <div className="p-4 rounded-md h-14 hover:bg-zinc-100 cursor-pointer transition-all ease-in-out  ">
            <img
              style={{ height: "24px", width: "24px" }}
              src={Answer}
              alt="answer"
            />
          </div>
          <div className="p-4 rounded-md h-14 hover:bg-zinc-100 cursor-pointer transition-all ease-in-out  ">
            <img
              style={{ height: "24px", width: "24px" }}
              src={Spaces}
              alt="spaces"
            />
          </div>
          <div className="p-4 rounded-md h-14 hover:bg-zinc-100 cursor-pointer transition-all ease-in-out  ">
            <img
              style={{ height: "24px", width: "24px" }}
              src={Notifications}
              alt="notifications"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 h-10">
          <div className=" flex items-center pl-1 border rounded-ssm  hover:border-blue-700 transition-all ease-in-out ">
            <img
              className="p-1 "
              style={{ height: "22px", width: "22px" }}
              src={search}
              alt=""
            />
            <input
              onChange={(e) => props?.setSearch(e.target.value)}
              className="  w-72 p-1 outline-none "
              type="text"
              name="search"
              id=""
              placeholder="Search Quora"
            />
          </div>
          <div className="border-2 rounded-full h-8  hover:bg-zinc-100 cursor-pointer transition-all ease-in-out">
            <div className="w-auto py-1 px-4 font-semibold text-sm text-gray-500">
              Try Quora+
            </div>
          </div>

          <div className=" p-4 rounded-md hover:bg-zinc-100 cursor-pointer transition-all ease-in-out ">
            {auth?.currentUser?.emailVerified ? (
              <Avatar
                round
                size="25"
                name={auth?.currentUser?.email ?? account}
              />
            ) : (
              <Avatar round size="25" src={account} />
            )}
          </div>
          <div className="p-4 rounded-md h-14  hover:bg-zinc-100 cursor-pointer transition-all ease-in-out  ">
            <img
              sizes="25"
              style={{ height: "24px", width: "24px" }}
              src={Languages}
              alt="language"
            />
          </div>
          <div
            onClick={() => setPost(true)}
            className="border border-r-2 rounded-full bg-red-700 hover:bg-red-800 text-white w-40 p-2 text-sm font-semibold "
          >
            <button className="pl-1">Add question</button>
          </div>
          <div
            className="p-2 rounded-r-full border-l-2 border-red-800 hover:bg-red-800"
            style={{ marginLeft: "-52px" }}
          >
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m5 8.5 7 7 7.005-7"
                  className="icon_svg-stroke"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      {post && <PostPopup setPost={setPost} />}
    </div>
  );
};

export default Navbar;
