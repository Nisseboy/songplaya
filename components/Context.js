import { createContext, useContext, useState } from "react";

const context = createContext();

export default function Context({ children }) {
  const [song, setSong] = useState();
  const [songs, setSongs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [audio, setAudio] = useState();

  const exposed = {
    song, setSong,
    songs, setSongs,
    progress, setProgress,
    playing, setPlaying,
    audio, setAudio,
    repeat, setRepeat
  };
  
  return <context.Provider value={exposed}>{children}</context.Provider>;
}

export const useData = () => useContext(context);