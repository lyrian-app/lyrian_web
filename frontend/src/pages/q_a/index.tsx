import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Main } from "../../components/layout";
import { MountStatus, Transition } from "../../components/transition";

import style from "./style.module.scss";
import content from "../../styles/content.module.scss";

export const QA = () => {
  const [status, setStatus] = useState<MountStatus>("willMount");

  useEffect(() => {
    if (status === "willMount") setStatus("mounted");
  }, [status]);

  return (
    <Transition status={status}>
      <div className={style.qa}>
        <Main>
          <div className={content.content}>
            <h1>Q & A</h1>

            <p>
              Lyrianによって制作された歌詞は、利用規約を遵守していただければ、営利・非営利問わず、報告やクレジット表記無しにご利用いただけます。
            </p>
            <p>
              以下によくある質問をまとめておりますが、もし該当しない質問をお持ちの方は、<a href="https://twitter.com/ichi_h3" target="_blank" rel="noopener noreferrer">Twitter</a>や<Link to="/contact">お問い合わせ</Link>よりお気軽にご連絡ください。
            </p>

            <h2>よくある質問</h2>

            <h3>Q: 営利目的の楽曲にLyrianを使用できますか？</h3>
            <p>
              利用規約を遵守していただければ、使用できます。
            </p>

            <h3>Q: Lyrianが使用できないケースはありますか？</h3>
            <p>
              利用規約を遵守していただければ、例外なくご利用いただけます。
            </p>

            <h3>Q: Lyrianを使った曲を公開する際、報告やクレジット表記は必要ですか？</h3>
            <p>
              どちらも必要ありません。ただ、報告を頂ければその楽曲を聴きに行きます。クレジット表記をしていただけると、私が喜びます。
            </p>

            <h3>Q: Lyrianを使って制作した歌詞の著作権はどうなりますか？</h3>
            <p>
              制作した本人に帰属します。ただし、<b>モデル作成時に使用した文章の著作権は、その著者に帰属します。</b>
            </p>
            <p>
              Lyrianはアプリの仕組み上、入力した文章の長さや種類によっては、その内容がそのまま出力されることがあります。著作権の問題含め、Lyrianによって発生した如何なるトラブルに関して、制作者は一切の責任を負いかねますので十分ご注意ください。
            </p>
          </div>
        </Main>
      </div>
    </Transition>
  );
};
