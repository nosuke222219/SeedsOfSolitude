import React, { useCallback, useState } from "react";
import style from "@/style/button.scss";
import { useHistory } from 'react-router-dom'

type Props = {
  className: string;
  countPage: VoidFunction;
  pageNumber: number;
};

type CircleProps = {
  countPage: VoidFunction;
  pageNumber: number;
}

const Button: React.FC<Props> = (props) => {
  const button_name: string = props.pageNumber == 1 ? "START" : (props.pageNumber > 1 ? "NEXT" : "BACK");
  return (
    <div className={props.className}>
      <p className={`${style.buttonName} ${style.rubrikNew} ${props.pageNumber == -1 ? style.white : ""} ${props.pageNumber == 0 ? style.black : ""}`}>{button_name}</p>
      <ButtonCircleSvg countPage={props.countPage} pageNumber={props.pageNumber}/>
    </div>
  );
};

const ButtonCircleSvg: React.FC<CircleProps> = (props) => {
  const history = useHistory();
  return (
    <svg
      onClick = {(props.pageNumber == 4 || props.pageNumber == 0) ? () => history.push("/live") : props.countPage}
      className={`${style.button} ${props.pageNumber == -1 ? style.white : ""} ${props.pageNumber == 0 ? style.black : ""}`}
      viewBox="0 0 87 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`${style.buttonCircle}`}
        d="M85.7437 45.0876C86.4177 53.4228 86.987 60.4687 82.8418 67.26C79.3015 73.0598 74.164 75.6618 66.1978 79.7001C58.799 83.4445 52.685 86.5443 44.2562 87.0498C34.768 87.618 22.5558 82.2904 12.6544 71.7039C2.27462 60.5981 0.519294 49.7098 0.813826 43.9805C1.63219 28.0213 11.2252 17.9598 14.1982 14.96C17.5191 11.6095 27.9562 1.07973 44.2641 0.911219C65.757 0.68589 78.0265 18.6593 78.922 20.0211C84.4449 28.4132 85.0716 36.7641 85.7437 45.0876Z"
        fill="white"
        stroke="black"
      />
      <path
        className={style.buttonArrow}
        d="M40.3525 36.8182L48.4461 45.3466L40.3525 53.875"
        stroke="black"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Button;
