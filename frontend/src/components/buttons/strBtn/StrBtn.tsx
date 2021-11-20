import React from "react";

import style from "./strBtn.module.scss";

interface StrBtnProps {
  value?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const StrBtn = (props: StrBtnProps) => {
  return (
    <button className={style.strBtn} onClick={props.onClick}>
      {props.value}
    </button>
  );
};
