import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LyricsContext, ToasterContext } from "../../providers";

import { CircleIconBtn, RectBtn, StrBtn } from "../../components/buttons";
import { Textarea } from "../../components/form";
import { Grid, Main } from "../../components/layout";
import { H2 } from "../../components/text";
import {
  MountStatus,
  Transition,
  TRANSITION_TIME,
} from "../../components/transition";
import style from "./style.module.scss";

export const Lyrics = () => {
  const { lyrics } = useContext(LyricsContext)!;
  const { bake } = useContext(ToasterContext)!;

  const [status, setStatus] = useState<MountStatus>("willMount");

  const navigate = useNavigate();

  let text = `Lyrian Web β - マルコフ連鎖を用いた日本語の歌詞生成アプリケーション。\n『${lyrics.title}』の歌詞をLyrianで制作しました。`;

  useEffect(() => {
    if (status === "willMount") setStatus("mounted");
  }, [status]);

  const onTwitterClick = () => {
    window.open(
      `https://twitter.com/share?url=${window.location.origin}&text=${text}`
    );
  };

  const onFacebookClick = () => {
    window.open(
      `http://www.facebook.com/sharer.php?u=${window.location.origin}&t=${text}`
    );
  };

  const onPocketClick = () => {
    window.open(
      `http://getpocket.com/edit?url=${window.location.origin}&title=${text}`
    );
  };

  const onCopyClick = () => {
    navigator.clipboard.writeText(lyrics.contents);
    bake({
      type: "ok",
      value: "コピーしました！",
    });
  };

  const onBackClick = () => {
    setStatus("willUnmount");
    setTimeout(() => navigate(-1), TRANSITION_TIME, false);
  };

  return (
    <Transition status={status}>
      <div className={style.lyrics}>
        <Main>
          <H2>歌詞が完成しました！</H2>
          <div className={style.shareBtns}>
            <Grid cols={3}>
              <div className={style.btn}>
                <CircleIconBtn
                  iconName="icon-twitter"
                  size="large"
                  bgColor="twitter"
                  onClick={onTwitterClick}
                />
              </div>
              <div className={style.btn}>
                <CircleIconBtn
                  iconName="icon-facebook-official"
                  size="large"
                  bgColor="facebook"
                  onClick={onFacebookClick}
                />
              </div>
              <div className={style.btn}>
                <CircleIconBtn
                  iconName="icon-get-pocket"
                  size="large"
                  bgColor="pocket"
                  onClick={onPocketClick}
                />
              </div>
            </Grid>
          </div>
          <div className={style.textarea}>
            <Textarea value={lyrics.contents} />
          </div>
          <RectBtn value="コピー" size="large" onClick={onCopyClick} />
          <div className={style.back}>
            <StrBtn size="small" onClick={onBackClick}>
              前のページに戻る
            </StrBtn>
          </div>
        </Main>
      </div>
    </Transition>
  );
};
