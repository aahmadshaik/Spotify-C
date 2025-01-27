// context/TokenContext.js
import React, { createContext, useState } from "react";

export const TokenContext = createContext();

export function TokenProvider({ children }) {
  const [token, setToken] = useState(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}
