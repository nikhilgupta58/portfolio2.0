
import React from "react";

export const AboutContext = React.createContext(null);

export const useAboutContext = () => {
  const context = React.useContext(AboutContext);
  if (!context)
    throw new Error("useAboutContext can not be used outside it's provider");
  return context;
};
