import React from "react";
import { useNavigate } from "react-router-dom";

import { RectBtn, ScrollBtn } from "../../components/buttons";
import { Footer } from "../../components/footer";
import { Grid } from "../../components/layout";
import { H1, H2, H3 } from "../../components/text";
import style from "./style.module.scss";

export const LandingPage = () => {
  let whatIsRef = React.createRef<HTMLDivElement>();

  const navigate = useNavigate();
  const toStartPage = () => navigate("/start");

  return (
    <div className={style.lp}>
      <div className={style.top}>
        <H1>Lyrian Web β</H1>
        <p className={style.subtitle}>日本語の歌詞生成アプリケーション</p>
        <RectBtn value="はじめる" size="large" onClick={toStartPage} />
        <div className={style.scrollBtn}>
          <ScrollBtn jumpToRef={whatIsRef} arrow="down" />
        </div>
      </div>

      <div className={style.whatIs} ref={whatIsRef}>
        <H2>Lyrianとは？</H2>
        <p className={style.discription}>
          Lyrianとは、マルコフ連鎖を用いて日本語の歌詞の生成を行うアプリケーションです。
          お気に入りの文章を学習させることで、その文章に近い雰囲気の歌詞を生成することができます。
        </p>
        <div className={style.usageBox}>
          <Grid gap="2rem">
            <div className={style.usageItem}>
              <div className={`${style.img} ${style.model}`} />
              <div className={style.explain}>
                <H3>モデル作成</H3>
                <p>
                  入力された文章を基にモデルを作成します。
                  Lyrianでは、モデルに登録した単語を使用して歌詞を生成するため、
                  モデル作成は歌詞の雰囲気を決める重要な工程とも言えます。
                </p>
              </div>
            </div>
            <div className={style.usageItem}>
              <div className={`${style.img} ${style.pen}`} />
              <div className={style.explain}>
                <H3>作詞</H3>
                <p>
                  Lyrianは単語同士をランダムに組み合わせて歌詞を生成するため、
                  普段では思いつかないようなフレーズを多く提案してくれます。
                  もちろん、提案された歌詞を修正して使うこともできます。
                </p>
              </div>
            </div>
            <div className={style.usageItem}>
              <div className={`${style.img} ${style.lyrics}`} />
              <div className={style.explain}>
                <H3>完成</H3>
                <p>
                  歌詞が完成すれば、後は歌うだけ。
                  あなたの曲がより良いものになることを祈っています！
                </p>
              </div>
            </div>
          </Grid>
        </div>
      </div>

      <div className={style.feature}>
        <H2>特徴</H2>
        <div className={style.featBox}>
          <Grid cols={2} gap="2rem">
            <div className={style.featItem}></div>
            <div className={style.featItem}></div>
          </Grid>
        </div>
      </div>

      <div className={style.bottom}>
        <H2>さあ、はじめよう。</H2>
        <RectBtn value="はじめる" size="large" onClick={toStartPage} />
      </div>

      <Footer />
    </div>
  );
};
