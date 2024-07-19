import Sidebar from "./Sidebar";
import Display from "./Display";
import Player from "./Player";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

export default function Wrapper() {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}
