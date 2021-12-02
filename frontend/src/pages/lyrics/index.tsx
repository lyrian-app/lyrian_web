import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LyricsContext, ToasterContext } from "../../providers";

import { RectBtn, StrBtn } from "../../components/buttons";
import { Textarea } from "../../components/form";
import { Main } from "../../components/layout";
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

  useEffect(() => {
    if (status === "willMount") setStatus("mounted");
  }, [status]);

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
          <H2>歌詞が完成しました</H2>
          <div className={style.textarea}>
            <Textarea defaultValue={lyrics.contents} />
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
