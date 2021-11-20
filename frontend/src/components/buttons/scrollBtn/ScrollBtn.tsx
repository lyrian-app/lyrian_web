import React from "react";

import style from "./scrollBtn.module.scss";

interface ScrollBtnProps {
  arrow: "down" | "up";
  jumpToRef: React.RefObject<HTMLElement>;
}

export const ScrollBtn = (props: ScrollBtnProps) => {
  const handler = () => {
    props.jumpToRef!.current!.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className={style.scrollBtn}>
      <i className={`icon-${props.arrow}-open`} onClick={handler} />
    </div>
  );
};
