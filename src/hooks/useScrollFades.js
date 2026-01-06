import { useState } from "react";

export function useScrollFades(maxHeight = 64) {
  const [topFade, setTopFade] = useState(0);
  const [botFade, setBotFade] = useState(0);

  const onScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const scrollHeight = e.target.scrollHeight;
    const clientHeight = e.target.clientHeight;

    const top = scrollTop / 5;
    const bottom = (scrollHeight - scrollTop - clientHeight) / 5;

    setTopFade(Math.min(top, maxHeight));
    setBotFade(Math.min(bottom, maxHeight));
  };

  return { topFade, botFade, onScroll };
}
