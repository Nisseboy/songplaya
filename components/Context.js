import { createContext, useContext, useState } from "react";

const context = createContext();

export default function Context({ children }) {
  const [song, setSong] = useState("default title");
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);

  const exposed = {
    song, setSong,
    progress, setProgress,
    playing, setPlaying
  };
  
  return <context.Provider value={exposed}>{children}</context.Provider>;
}

export const useData = () => useContext(context);