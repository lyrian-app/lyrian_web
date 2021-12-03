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

            <h3>0.1.0_b - Unreleased</h3>
            <ul>
              <li>ベータ版の公開。</li>
            </ul>
          </div>
        </Main>
      </div>
    </Transition>
  );
};
