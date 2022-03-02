import React, { createContext, ReactElement, useContext, useState } from "react";

interface RouterContextType {
  setCurrentPathname: React.Dispatch<React.SetStateAction<string>>;
  currentPathname: string;
}
export const RouterContext = createContext<RouterContextType>({} as RouterContextType);

interface RouterProps {
  children: React.ReactChild;
}

const Router = ({ children }: RouterProps) => {
  const [currentPathname, setCurrentPathname] = useState<string>(window.location.pathname);

  return <RouterContext.Provider value={{ currentPathname, setCurrentPathname }}>{children}</RouterContext.Provider>;
};

export default Router;

interface SwitchProps {
  children: ReactElement[]; // 참고로 하나인 경우도 처리해주어야하지만, 생략한다.
}
export const Switch = ({ children }: SwitchProps) => {
  const { currentPathname } = useContext(RouterContext);

  console.log(currentPathname);

  let renderComponent;
  for (const child of children) {
    if (child.props.path === currentPathname) {
      renderComponent = child;
      break;
    }
  }

  if (renderComponent) return renderComponent;
  else return null;
};

interface RouteProps {
  children: ReactElement;
  path: string;
}
export const Route = ({ children }: RouteProps) => {
  return children;
};
