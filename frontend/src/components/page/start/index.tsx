import React from "react";

import { RectBtn, StrBtn } from "../../ui/buttons";
import { Footer } from "../../ui/footer";
import { Textarea } from "../../ui/form";
import { H2 } from "../../ui/text";
import style from "./style.module.scss";

export const Start = () => {
  return (
    <div className={style.start}>
      <div className={style.main}>
        <H2>モデルの作成</H2>

        <p className={style.discription}>
          Lyrianに学習させる文章を入力してください。
          <br />
          制作している楽曲の雰囲気に合わせた文章を入力することで、その雰囲気に近い歌詞を生成します。
        </p>

        <div className={style.textarea}>
          <Textarea placeholder="文章を入力してください。" />
        </div>

        <p className={style.notice}>※ 使用する文章の著作権にご注意ください。</p>

        <div className={style.genModelBtn}>
          <RectBtn value="作成" size="large" />
        </div>

        <StrBtn value="既にモデルをお持ちの方はこちら" />
      </div>
      <Footer />
    </div>
  );
};
