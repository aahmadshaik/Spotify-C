import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semi-bold">
        <div className="flex items-center gap-2 ">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer "
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer "
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://open.spotify.com/premium"
            >
              Explore Premiume
            </a>
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US&label=sp_cid:ba009beb-4e3f-414c-a0a4-27a50bde9e11&_branch_match_id=1321662685068324949&utm_source=Web&utm_campaign=DEFAULT&utm_medium=/download+page&_branch_referrer=H4sIAAAAAAAAAwXBQQqAIBAAwNd0NDWtMIjoFnjtHru6kSQlKUG/b%2BYoJeWB85zuEvavjuE6%2BSpfu3T2MQGnCEhxzGlzwVdqRhDCICHTpHampXYMBGjW9NAK9GRIyh9xUIX%2BVAAAAA%3D%3D&pli=1"
            >
              Install App
            </a>
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://accounts.google.com/o/oauth2/v2/auth?response_type=code&access_type=offline&client_id=1046568431490-ij1gi5shcp2gtorls09frkc56d4mjbe2.apps.googleusercontent.com&state=AQCzTvVr%2F0PoG1Wgk8U5FXjLYPIIf9%2FF9QNXcW1Kui1cTAuOUgLGI6lE1ecz3DJvNimd%2FPkXnnspTRvUSuO788q5wLG8XG%2BEIpXt%2F%2FUXcLGWLifg%2BdZkhiD1Q2Lz5nZOW7rTFj7Ot5nLc%2FINsuNHMk8Ef3RFiy90snXhHS51njKbJCgCVzf6tK8D31Zv53LcRptv%2FjFd3YuZ76inmFvySbjOEusuurkgRvi8tdGNIfzv7GCcN7%2B5JW%2Blyfy6S5beSJhk1xaOmyKXD%2FcTH8qrQsqBf%2BWMAtqgsPRLBHuspjes2Juw1gqodmTkex5CkeZ8Lbk4e1xWhERsYkOwC1JFKp9rpfOOUrRNrBBznvzwyImhLuET3pGQjFADb43t%2F7HWlEguDPnSEgDLFYhsfE1nyK7AImcsd9Vw98GRpZZBf7K7dPCS1nC50vwBUX%2F1n9YQUsM%3D&scope=profile+email+openid&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fgoogle%2Fredirect"
            >
              A
            </a>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer ">
          All
        </p>
        <p className="bg-black text-white  px-4 py-1 rounded-2xl cursor-pointer">
          Music
        </p>
        <p className="bg-black text-white  px-4 py-1 rounded-2xl cursor-pointer ">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default NavBar;
