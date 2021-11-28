import React from "react";

import style from "./iconBtn.module.scss";

interface IconBtnProps {
  iconName: string;
  type?: "button" | "submit" | "reset";
  size: "small" | "medium" | "large";
  color: "black" | "white";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const IconBtn = (props: IconBtnProps) => {
  const className = `${style.iconBtn} ${style[props.size]} ${
    style[props.color]
  }`;

  return (
    <button className={className} type={props.type} onClick={props.onClick}>
      <i className={props.iconName} />
    </button>
  );
};
