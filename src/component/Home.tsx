import React, { useCallback, useState } from "react";
import style from "@/style/Home.scss";
import Introduction_1 from "./introduction_1";
import Introduction_2 from "./Statement";
import Intro_template from "./intro_template";
import Page2Png from "@/img/page2.png";
import Page3Png from "@/img/page3.png";
import Page4Png from "@/img/page4.png";

const Home: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const countPage = useCallback(() => {
    setPageNumber((prev) => prev + 1);
  }, []);

  return (
    <div
      className={`${style.wrapper} `}
    >
      <Introduction_1 countPage={countPage} pageNumber={pageNumber} />
      {(pageNumber == 1 || pageNumber == 2 || pageNumber == 3) && (
        <Intro_template
          pageNumber={pageNumber}
          title={"日々の会話"}
          png={Page2Png}
          intro_number={1}
          sentence_ja={
            "相互に影響しあっている。あなたの表情・声は相手に入力され続けている。"
          }
          sentence_en={
            "They are mutually influencing each other.Your expression and voice Your facial expressions and voice are continuously being input to the other person."
          }
        />
      )}
      {(pageNumber == 2 || pageNumber == 3 || pageNumber == 4) && (
        <Intro_template
          pageNumber={pageNumber}
          title={"ツイッター"}
          png={Page3Png}
          intro_number={2}
          sentence_ja={
            "ツイートをすると、インターネットと繋がり、他者に認識される。"
          }
          sentence_en={
            "When you tweet, you connect to the Internet When you tweet, you are connected to the Internet and recogniz ed by others."
          }
        />
      )}
      {(pageNumber == 3 || pageNumber == 4 || pageNumber == 5) && (
        <Intro_template
          pageNumber={pageNumber}
          title={"ツイートする瞬間"}
          png={Page4Png}
          intro_number={3}
          sentence_ja={
            "ツイートする瞬間は他者・世界共に認識されていない「孤独」な状態である。"
          }
          sentence_en={
            "At the moment of tweeting, you are unrecognized by others and the world. It is a state of solitude."
          }
        />
      )}
    </div>
  );
};

export default Home;
