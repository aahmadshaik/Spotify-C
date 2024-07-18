import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[25%] mb-0  rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="Home" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center pb-1 gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="search" />

          {/* <input
            className="rounded-full cursor-pointer p-1  w-[84%] text-black"
            type="search"
            placeholder="what do you want to play ?"
          ></input> */}
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />

            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 ">
          <h1>Create Your First Playlist</h1>
          <p className="font-light">Start by adding songs to your playlist</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Lets find some podcasts to follow</h1>
          <p className="font-light">we will keep you update on new episode</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-8">
            Browse Boardcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
