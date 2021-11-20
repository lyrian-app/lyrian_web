import React from "react";

import { IconBtn } from "../buttons";

import style from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.iconBtns}>
        <IconBtn iconName="icon-twitter" size="large" />
        <IconBtn iconName="icon-github-circled" size="large" />
      </div>

      <div className={style.links}>
        <a href="#">ドキュメント</a>
        <span className={style.bar}>|</span>
        <a href="#">Q & A</a>
        <span className={style.bar}>|</span>
        <a href="#">リリースノート</a>
        <span className={style.bar}>|</span>
        <a href="#">お問い合わせ</a>
        <span className={style.bar}>|</span>
        <a href="#">利用規約</a>
      </div>

      <p className={style.copyright}>
        Copyright © 2021 Ichi Hazuki and the Lyrian Project contributors.
      </p>
    </footer>
  );
};
