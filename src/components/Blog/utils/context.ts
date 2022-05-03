
import React from "react";

export const BlogContext = React.createContext(null);

export const useBlogContext = () => {
  const context = React.useContext(BlogContext);
  if (!context)
    throw new Error("useBlogContext can not be used outside it's provider");
  return context;
};
