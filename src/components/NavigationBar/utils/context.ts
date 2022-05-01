
import React from "react";

export const NavigationBarContext = React.createContext(null);

export const useNavigationBarContext = () => {
  const context = React.useContext(NavigationBarContext);
  if (!context)
    throw new Error("useNavigationBarContext can not be used outside it's provider");
  return context;
};
