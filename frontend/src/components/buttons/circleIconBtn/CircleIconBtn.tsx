import React from "react";

import style from "./circleIconBtn.module.scss";

interface CircleIconBtnProps {
  iconName: string;
  type?: "button" | "submit" | "reset";
  size: "small" | "medium" | "large" | "xlarge";
  bgColor: "pink" | "green" | "twitter" | "facebook" | "pocket";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CircleIconBtn = (props: CircleIconBtnProps) => {
  const btnClass = `${style.btn} ${style[props.bgColor]} ${style[props.size]}`;
  const iClass = `${props.iconName} ${style.icon}`;

  return (
    <button className={btnClass} type={props.type} onClick={props.onClick}>
      <i className={props.iconName} />
    </button>
  );
};
