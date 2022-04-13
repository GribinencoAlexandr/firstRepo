import React, { useState, useEffect } from "react";

export const ResizeContext = React.createContext();

export default function ResizeContextProvider({ children }) {
  const [orientation, setOrientation] = useState(false);

  const isVertical = () => {
    let vertical = window.innerHeight > window.innerWidth;
    // let orintationResult = vertical ? window.innerWidth : window.innerHeight;
    // orintationResult === window.innerWidth
    //   ? console.log("vertical")
    //   : console.log("horizontal");
    setOrientation(vertical);
  };
  useEffect(() => {
    isVertical();
    window.addEventListener("resize", isVertical);
    console.log("1224");
    return () => window.removeEventListener("resize", isVertical);
  }, []);
  return (
    <ResizeContext.Provider value={{ orientation }}>
      {children}
    </ResizeContext.Provider>
  );
}
