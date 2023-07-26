import React, { ReactElement, useCallback, useState } from "react";
import style from "@/style/Flower.scss";


type Props = {
    className: string;
    Flower: string;
    haname: string;
    hanakotoba: string;
  };

const Flowers: React.FC<Props> = (props) => {
  return (
    <div className={style.wrapper}>
        <img src={props.Flower}  className={style.gif}alt="" />
        <h1 className={style.haname}>{props.haname}</h1>
        <h2 className={style.hanakotoba}>{props.hanakotoba}</h2>
    </div>
  );
};

export default Flowers;
