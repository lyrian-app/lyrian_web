import React from "react";

import { IconBtn } from "../buttons";

import style from "./footer.module.scss";

export const Footer = () => {
  const onTwitterClick = () => window.open("https://twitter.com/ichi_h3");

  const onGitHubClick = () =>
    window.open("https://github.com/lyrian-app/lyrian_web");

  return (
    <footer className={style.footer}>
      <div className={style.iconBtns}>
        <IconBtn
          iconName="icon-twitter"
          size="xlarge"
          color="white"
          onClick={onTwitterClick}
        />
        <IconBtn
          iconName="icon-github-circled"
          size="xlarge"
          color="white"
          onClick={onGitHubClick}
        />
      </div>

      <div className={style.links}>
        <a
          href="https://github.com/lyrian-app/lyrian_web/wiki/1.-%E4%BD%BF%E3%81%84%E6%96%B9"
          target="_blank"
          rel="noopener noreferrer"
        >
          ドキュメント
        </a>
        <span className={style.bar}>|</span>
        <a
          href="https://github.com/lyrian-app/lyrian_web/wiki/2.-Q-&-A"
          target="_blank"
          rel="noopener noreferrer"
        >
          Q & A
        </a>
        <span className={style.bar}>|</span>
        <a
          href="https://github.com/lyrian-app/lyrian_web/blob/main/CHANGELOG.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          リリースノート
        </a>
        <span className={style.bar}>|</span>
        <a
          href="mailto:ichi.h3@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          お問い合わせ
        </a>
        <span className={style.bar}>|</span>
        <a
          href="https://github.com/lyrian-app/lyrian_web/wiki/3.-%E5%88%A9%E7%94%A8%E8%A6%8F%E7%B4%84"
          target="_blank"
          rel="noopener noreferrer"
        >
          利用規約
        </a>
      </div>

      <p className={style.text}>
        Background photo by <a href="https://unsplash.com/@adigold1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Adi Goldstein</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>

      <p className={style.text}>
        Copyright © 2021 Ichi Hazuki and the Lyrian Project contributors.
      </p>
    </footer>
  );
};
