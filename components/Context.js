import { createContext, useContext, useState } from "react";

const context = createContext();

export default function Context({ children }) {
  const [song, setSong] = useState("default title");

  const exposed = {
    song, setSong
  };
  
  return <context.Provider value={exposed}>{children}</context.Provider>;
}

export const useData = () => useContext(context);