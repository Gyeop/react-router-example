import React, { createContext, useState } from "react";

interface RouterContext {
  setCurrentPathname: React.Dispatch<React.SetStateAction<string>>;
}
export const RouterContext = createContext<RouterContext>({} as RouterContext);

interface RouterProps {
  children: React.ReactChild;
}

const Router = ({ children }: RouterProps) => {
  const [currentPathname, setCurrentPathname] = useState<string>(window.location.pathname);

  return <RouterContext.Provider value={{ setCurrentPathname }}>{children}</RouterContext.Provider>;
};

export default Router;
