import React, { useState } from "react";
import style from "@/style/Statement.scss";
import Button from "./button";
import BGIMG from "@/img/bg.png"

const Introduction_1: React.FC = () => {
  const [pageNumber, setNumber] = useState<number>(-1);
  setTimeout(() => {
    setNumber(0);
  }, 2 * 1000);

  const Tmp = () => "";
  return (
    <div className={`${style.wrapper} ${pageNumber == 0 ? style.wrapperBlack : ""}`}>

        <img className={style.img} src={BGIMG} /> 
        <h1 className={`${style.title} ${pageNumber == 0 ? style.titleSmall : ""} ${style.rubrikNewLite}`}>STATEMENT</h1>
        <p className={`${style.yuGothic} ${style.hideJp} ${pageNumber == 0 ? style.statementJa : ""}`}>私は孤独である。どれだけ人と一緒に暮らしていようとも、死ぬときは独りだ。もしかしたら、人間は皆、究極的には独りなのかもしれない。何かに集中している瞬間、写真を撮る瞬間、ツイートする瞬間。瞬間瞬間で、人は独りになる。<br/><br/>
でもそれは、決して悪いことではない。一人一人が、いろいろな孤独を抱えて生きている。ツイートはそれが結晶したものであり、ツイッターは、人の孤独の集合体だ。それらを種にして感情を読み取り、その一つ一つにあった花を咲かせると、どんな景色が見られるだろう。本作品は、孤独な一瞬を卑下するのでなく愛おしく当たり前のものとして捉えることで、人の孤独を肯定することを試みた。<br/><br/>
人の孤独はおもいおもいの花を咲かせ、鑑賞者を包み込む。</p>
        <Button className={style.button} pageNumber={pageNumber} countPage={Tmp}/>
    </div>
  );
};

export default Introduction_1;