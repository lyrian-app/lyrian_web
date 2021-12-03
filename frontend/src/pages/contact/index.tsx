import React, { useEffect, useState } from "react";

import { Main } from "../../components/layout";
import { MountStatus, Transition } from "../../components/transition";

import style from "./style.module.scss";
import content from "../../styles/content.module.scss";

import mailImg from "../../assets/imgs/mail.png";

export const Contact = () => {
  const [status, setStatus] = useState<MountStatus>("willMount");

  useEffect(() => {
    if (status === "willMount") setStatus("mounted");
  }, [status]);

  return (
    <Transition status={status}>
      <div className={style.contact}>
        <Main>
          <div className={content.content}>
            <h1>お問い合わせ</h1>

            <p>
              ご連絡は以下のメールアドレス、または{" "}
              <a
                href="https://twitter.com/ichi_h3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{" "}
              からお気軽にお問い合わせください（メールからのご連絡の方が確実です）。
            </p>

            <div className={style.email}>
              <img src={mailImg} alt="email" />
            </div>
          </div>
        </Main>
      </div>
    </Transition>
  );
};
