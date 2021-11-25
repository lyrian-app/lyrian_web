import React from "react";

import style from "./iconBtn.module.scss";

interface IconBtnProps {
  iconName: string;
  size: "small" | "medium" | "large";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const IconBtn = (props: IconBtnProps) => {
  const className = `${style.iconBtn} ${style[props.size]}`;

  return (
    <button className={className} onClick={props.onClick}>
      <i className={props.iconName} />
    </button>
  );
};
