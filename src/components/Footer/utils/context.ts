
import React from "react";

export const FooterContext = React.createContext(null);

export const useFooterContext = () => {
  const context = React.useContext(FooterContext);
  if (!context)
    throw new Error("useFooterContext can not be used outside it's provider");
  return context;
};
