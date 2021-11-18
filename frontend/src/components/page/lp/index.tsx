import React from "react";

import { RectBtn, ScrollBtn } from "../../ui/buttons";
import { Footer } from "../../ui/footer";
import { Grid } from "../../ui/grid";
import { H1, H2 } from "../../ui/text";
import style from "./style.module.scss";

export const LandingPage = () => {
  let whatIsRef = React.createRef<HTMLDivElement>();

  return (
    <div className="l-lp">
      <div className={style.top}>
        <H1>Lyrian Web</H1>
        <p className={style.description}>日本語の歌詞生成アプリケーション</p>
        <RectBtn value="はじめる" size="large" />
        <div className={style.scrollBtn}>
          <ScrollBtn jumpToRef={whatIsRef} arrow="down" />
        </div>
      </div>

      <div className={style.whatIs} ref={whatIsRef}>
        <H2>Lyrianとは？</H2>
        <p className={style.description}>
          Lyrianとは、マルコフ連鎖を用いて日本語の歌詞の生成を行うアプリケーションです。
          お気に入りの文章を学習させることで、その文章に近い雰囲気の歌詞を生成することができます。
        </p>
        <div className={style.usageBox}>
          <Grid gap="2rem">
            <div className={style.usageItem}></div>
            <div className={style.usageItem}></div>
            <div className={style.usageItem}></div>
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
        <div className={style.startBtn}>
          <RectBtn value="はじめる" size="large" />
        </div>
      </div>

      <Footer />
    </div>
  );
};
