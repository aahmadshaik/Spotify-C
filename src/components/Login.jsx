import React from "react";

async function getToken() {
  const API_URL = "https://accounts.spotify.com/authorize";
  const SPOTIFY_CLIENT_ID = "ae6e6d7b5a71480db0c1a88f14e19ddd";
  const REDIRECT_URL = "https://spotify-c-flame.vercel.app/";
  const scope = [
    "user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-playback-position",
    "user-top-read",
    "user-read-recently-played",
  ];

  const authUrl = `${API_URL}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URL
  )}&scope=${encodeURIComponent(
    scope.join(" ")
  )}&response_type=token&show_dialog=true`;

  console.log("Redirecting to: ", authUrl); // Debug log

  window.location.href = authUrl;
}

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        className="bg-green-500 text-white font-bold py-3 px-6 rounded"
        onClick={getToken}
      >
        Login Spotify
      </button>
    </div>
  );
}
