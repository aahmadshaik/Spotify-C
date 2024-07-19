import { useContext, useEffect } from "react";

import { SpotifyProvider } from "./context/SpotifyContext";
import { TokenContext } from "./context/TokenContext";
import Wrapper from "./components/Wrapper";
import Login from "./components/Login";

function App() {
  const { token, setToken } = useContext(TokenContext);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = new URLSearchParams(hash.substring(1)).get("access_token");
      if (token) {
        setToken(token);
      }
    }
  }, [setToken]);

  return <SpotifyProvider>{token ? <Wrapper /> : <Login />}</SpotifyProvider>;
}

export default App;
