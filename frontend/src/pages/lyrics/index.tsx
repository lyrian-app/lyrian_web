import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LyricsContext, ToasterContext } from "../../providers";

import { RectBtn, StrBtn } from "../../components/buttons";
import { Textarea } from "../../components/form";
import { Main } from "../../components/layout";
import { H2 } from "../../components/text";
import style from "./style.module.scss";

export const Lyrics = () => {
  const { lyrics } = useContext(LyricsContext)!;
  const { bake } = useContext(ToasterContext)!;
  const navigate = useNavigate();

  const onCopyClick = () => {
    navigator.clipboard.writeText(lyrics.contents);
    bake({
      type: "ok",
      value: "コピーしました！",
    });
  };

  const onBackClick = () => navigate(-1);

  return (
    <div className={style.lyrics}>
      <Main>
        <H2>歌詞が完成しました</H2>
        <div className={style.textarea}>
          <Textarea value={lyrics.contents} />
        </div>
        <RectBtn value="コピー" size="large" onClick={onCopyClick} />
        <div className={style.back}>
          <StrBtn value="前のページに戻る" onClick={onBackClick} />
        </div>
      </Main>
    </div>
  );
};
