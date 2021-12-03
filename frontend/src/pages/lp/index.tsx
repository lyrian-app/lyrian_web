import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { RectBtn, ScrollBtn } from "../../components/buttons";
import { Grid } from "../../components/layout";
import { H1, H2, H3 } from "../../components/text";
import {
  MountStatus,
  Transition,
  TRANSITION_TIME,
} from "../../components/transition";
import style from "./style.module.scss";

export const LandingPage = () => {
  const [status, setStatus] = useState<MountStatus>("willMount");

  let whatIsRef = React.createRef<HTMLDivElement>();
  let feat = React.createRef<HTMLDivElement>();
  let bottom = React.createRef<HTMLDivElement>();

  const navigate = useNavigate();

  useEffect(() => {
    if (status === "willMount") setStatus("mounted");
  }, [status]);

  const toStartPage = () => {
    setStatus("willUnmount");
    setTimeout(() => navigate("/start"), TRANSITION_TIME, false);
  };

  return (
    <Transition status={status}>
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
            ユーザーが予め入力した文章の中から単語をランダムに選択し、歌詞生成を行います。
          </p>
          <div className={style.usageBox}>
            <Grid gap="2rem">
              <div className={style.usageItem}>
                <div className={`${style.svgImg} ${style.model}`} />
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
                <div className={`${style.svgImg} ${style.pen}`} />
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
                <div className={`${style.svgImg} ${style.lyrics}`} />
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
          <ScrollBtn jumpToRef={feat} arrow="down" />
        </div>

        <div className={style.feature} ref={feat}>
          <H2>特徴</H2>
          <div className={style.featBox}>
            <Grid cols={2} gap="3rem">
              <div className={style.featItem}>
                <div className={`${style.featIcon} ${style.first}`}>
                  <div className={`${style.svgImg} ${style.random}`} />
                </div>
                <H3>ランダム性</H3>
                <p className={style.discription}>
                  Lyrian
                  はマルコフ連鎖を用いて歌詞を生成するため、単語同士の組み合わせはランダムに決定します。
                  これにより、入力した文章の雰囲気を継承しつつ、通常では思いつかないユニークなフレーズを作成することに長けています。
                </p>
              </div>
              <div className={style.featItem}>
                <div className={`${style.featIcon} ${style.last}`}>
                  <div className={`${style.svgImg} ${style.rhythm}`} />
                </div>
                <H3>リズミカル</H3>
                <p className={style.discription}>
                  日本語で歌詞を作成する場合、その言語の特性上、歌ったときのリズムが平坦になりやすいという特徴があります。
                  Lyrian
                  では音符に言葉を割り当てる際に、その音節や無声音などを考慮することで、
                  歌ったときにリズミカルな歌詞が生成されやすくなっています（設定によって平坦にすることも可能です）。
                </p>
              </div>
            </Grid>
          </div>
          <ScrollBtn jumpToRef={bottom} arrow="down" />
        </div>

        <div className={style.bottom} ref={bottom}>
          <H2>さあ、はじめよう。</H2>
          <RectBtn value="はじめる" size="large" onClick={toStartPage} />
        </div>
      </div>
    </Transition>
  );
};
