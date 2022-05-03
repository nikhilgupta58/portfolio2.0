
import React from "react";

export const PortfolioContext = React.createContext(null);

export const usePortfolioContext = () => {
  const context = React.useContext(PortfolioContext);
  if (!context)
    throw new Error("usePortfolioContext can not be used outside it's provider");
  return context;
};
