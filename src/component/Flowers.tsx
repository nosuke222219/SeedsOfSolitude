import React, { useCallback, useState } from "react";
import style from "@/style/Flowers.scss";
import Flower from "./Flower"
import Katabami from "@/img/katabami.gif"
import Mugiwaragiku from "@/img/mugiwaragiku.gif"
import Peony from "@/img/peony.gif"
import Hyacinth from "@/img/hyacinth.gif"
import Higanbana from "@/img/higanbana.gif"
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import Logo from "./Logo_svg";
import Title from "./Title";
import BGIMG from "@/img/bg.png"

const style_bg = {
  backgroundImage: `url(${BGIMG})`,
  backgroundSize: "cover",
}

const Flowers: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className={style.wrapper} style={style_bg}>
      <div className={style.fixedDiv}>
        <Logo className={style.logo} />
        <Title className={style.title} />
        <Hamburger className={style.hamburger} checked={checked} setChecked={setChecked}/>
        <Menu className={`${style.menu} ${checked ? style.menuShow : ""}`}/>
      </div>
      <div className={style.container}>
        <Flower className={style.flower} Flower={Katabami} haname={"カタバミ"} hanakotoba={"「喜び」「輝く心」"}/>
        <Flower className={style.flower} Flower={Mugiwaragiku} haname={"ヘリクリサム"} hanakotoba={"「いつまでも続く喜び」"}/>
        <Flower className={style.flower} Flower={Peony} haname={"シャクヤク"} hanakotoba={"「怒り」「憤怒」"}/>
        <Flower className={style.flower} Flower={Hyacinth} haname={"ヒヤシンス"} hanakotoba={"「悲しみ」「悲哀」"}/>
        <Flower className={style.flower} Flower={Higanbana} haname={"ヒガンバナ"} hanakotoba={"「恐怖」「情熱」"}/>
      </div>
    </div>
  );
};

export default Flowers;
