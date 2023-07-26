import React from "react";
import style, { introNumber } from "@/style/intro_template.scss";

interface Props {
  pageNumber: number;
  title: string;
  png: string;
  intro_number: number;
  sentence_ja: string;
  sentence_en: string;
}

const Introduction_1: React.FC<Props> = (props) => {
  return (
    <div className={`${style.wrapper} ${(props.pageNumber == props.intro_number || props.pageNumber == props.intro_number + 2) ? style.wrapperHide : ""}`}>
        <h1 className={`${style.title} ${style.yuGothic}`}>{props.title}</h1>
        <img src={props.png} className={style.img} />
        <p className={`${style.rubrikNewLite} ${style.introNumber}`}>{props.intro_number}</p>
        <p className={`${style.yuGothic} ${style.sentenceJa}`}>{props.sentence_ja}</p>
        <p className={`${style.rubrikNew} ${style.sentenceEn}`}>{props.sentence_en}</p>
    </div>
  );
};

export default Introduction_1;
