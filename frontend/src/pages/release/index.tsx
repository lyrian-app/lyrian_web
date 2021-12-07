import React, { useEffect, useState } from "react";

import { Main } from "../../components/layout";
import { MountStatus, Transition } from "../../components/transition";

import style from "./style.module.scss";
import content from "../../styles/content.module.scss";

export const Release = () => {
  const [status, setStatus] = useState<MountStatus>("willMount");

  useEffect(() => {
    if (status === "willMount") setStatus("mounted");
  }, [status]);

  return (
    <Transition status={status}>
      <div className={style.release}>
        <Main>
          <div className={content.content}>
            <h1>リリースノート</h1>

            <h3>0.1.1_beta - 2021-12-7</h3>
            <ul>
              <li>レスポンシブデザインに対応。</li>
            </ul>

            <h3>0.1.0_beta - 2021-12-6</h3>
            <ul>
              <li>ベータ版の公開。</li>
            </ul>

            <p>
              詳しい更新履歴については{" "}
              <a
                href="https://github.com/lyrian-app/lyrian_web/blob/main/CHANGELOG.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                こちら
              </a>{" "}
              をご覧ください。
            </p>
          </div>
        </Main>
      </div>
    </Transition>
  );
};
