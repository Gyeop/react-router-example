import React, { useContext } from "react";
import { RouterContext } from "../../utils/Router";
interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
}

function Link({ children, onClick, to, ...props }: LinkProps) {
  const { setCurrentPathname } = useContext(RouterContext);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // 페이지가 이동하지 않도록 방지해주고,
    window.history.pushState({}, "", to); // URL을 변경시킨다.
    setCurrentPathname(to);
  };

  return (
    <a {...props} onClick={handleClick} href={to}>
      {children}
    </a>
  );
}

export default Link;
