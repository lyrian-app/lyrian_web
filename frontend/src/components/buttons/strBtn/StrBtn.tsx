import React from "react";

import style from "./strBtn.module.scss";

interface StrBtnProps {
  children?: React.ReactNode;
  size: "small" | "medium" | "large" | "xlarge";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const StrBtn = (props: StrBtnProps) => {
  const className = `${style.strBtn} ${style[props.size]}`;
  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
