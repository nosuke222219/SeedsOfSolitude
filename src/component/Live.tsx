import React, { useCallback, useState } from "react";
import style from "@/style/Live.scss";
import Title from "./Title";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import Logo from "./Logo_svg";

const Live: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className={style.wrapper}>
      <Logo className={style.logo} />
      <Title className={style.title} />
      <div className={style.cover}></div>
      <Hamburger
        className={style.hamburger}
        checked={checked}
        setChecked={setChecked}
      />
      <Menu className={`${style.menu} ${checked ? style.menuShow : ""}`} />
      <iframe
        className={style.iframe}
        src="https://www.youtube.com/embed/GVaLs79zT1k"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Live;
