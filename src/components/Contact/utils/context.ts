
import React from "react";

export const ContactContext = React.createContext(null);

export const useContactContext = () => {
  const context = React.useContext(ContactContext);
  if (!context)
    throw new Error("useContactContext can not be used outside it's provider");
  return context;
};
