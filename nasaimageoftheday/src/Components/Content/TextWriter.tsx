/**author:Sarbjeet Singh, contact:https://www.sarbzone.com*/

import { useEffect, useState } from "react";

const TextWriter: React.FC<{ text: string; speed: number }> = ({
  text,
  speed,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    
    
    
        const timer = setTimeout(() => {
          if (index < text.length) {
            setDisplayedText(prevDisplayText => prevDisplayText + text.charAt(index));
            setIndex(prevIndex => prevIndex + 1);
          }
        }, speed);
    
        return () => clearTimeout(timer);
  }, [text, speed,index]);

  return <span>{displayedText}</span>;
};
export default TextWriter;
