import React from "react";
import style from "@/style/Hamburger.scss";

type Props = {
  className: string;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  checked: boolean;
};

const Hamburger: React.FC<Props> = (props) => {
  return (
    <div
      onClick={() => props.setChecked(!props.checked)}
      className={`${props.className} ${style.hamburgerContent} ${
        props.checked ? style.changeShape : ""
      }`}
    >
      <div className={style.hamburger1}></div>
      <div className={style.hamburger2}></div>
      <div className={style.hamburger3}></div>
    </div>
  );
};

export default Hamburger;
