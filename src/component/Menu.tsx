import React from "react";
import style from "@/style/Menu.scss";
import { useHistory, useLocation } from "react-router-dom";

type Props = {
  className: string;
};

const Menu: React.FC<Props> = (props) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <div className={`${style.menu} ${props.className}`}>
    <h1 onClick={()=>history.push("/")} className={style.link}>TOP</h1>
      <h1 onClick={()=>history.push("/live")} className={`${style.link} ${location.pathname == "/live" ? style.dontTouch : ""}`}>EXHIBIT</h1>
      <h1 onClick={()=>history.push("/statement")} className={style.link}>STATEMENT</h1>
      <h1 onClick={()=>history.push("/flowers")} className={`${style.link} ${location.pathname == "/flowers" ? style.dontTouch : ""}`}>FLOWERS</h1>
      <a href="https://twitter.com/lonelinesseeds" target="_blank" className={`${style.link} ${style.twitter}`}>
        TWITTER
      </a>
    </div>
  );
};

export default Menu;
