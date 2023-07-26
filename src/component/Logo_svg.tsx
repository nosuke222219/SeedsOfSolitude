import React from "react";
import style from "@/style/logo.scss";
import LogoSvg from "@/img/logo.png";
import { useHistory } from 'react-router-dom';

type Props = {
  className: string;
};

const Logo: React.FC<Props> = (props) => {
  const history = useHistory();
  return (
      <img className={props.className} src={LogoSvg} onClick={()=>history.push("/")}/>
  );
};

export default Logo;
