import React from "react";
import { Link } from "react-router-dom";

import { IconBtn } from "../buttons";

import style from "./footer.module.scss";

export const Footer = () => {
  const onTwitterClick = () => window.open("https://twitter.com/ichi_h3");

  const onGitHubClick = () =>
    window.open("https://github.com/lyrian-app/lyrian_web");

  const scollTop = () =>
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });

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
        <Link to="/" onClick={scollTop}>
          ホーム
        </Link>
        <Link to="/docs" onClick={scollTop}>
          ドキュメント
        </Link>
        <Link to="/q_a" onClick={scollTop}>
          Q & A
        </Link>
        <Link to="/release" onClick={scollTop}>
          リリースノート
        </Link>
        <Link to="/contact" onClick={scollTop}>
          お問い合わせ
        </Link>
        <Link to="/tos" onClick={scollTop}>
          利用規約
        </Link>
      </div>

      <p className={style.text}>
        Background photo by{" "}
        <a href="https://unsplash.com/@adigold1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Adi Goldstein
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>

      <p className={style.text}>
        Copyright © 2021 Ichi Hazuki and the Lyrian Project contributors.
      </p>
    </footer>
  );
};
