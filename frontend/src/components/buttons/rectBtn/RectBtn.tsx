import React from "react";

import style from "./rectBtn.module.scss";

interface RectBtnProps {
  size: "small" | "medium" | "large";
  value?: string;
  id?: "";
  name?: "";
  type?: "button" | "reset" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const RectBtn = (props: RectBtnProps) => {
  const className = `${style.rectBtn} ${style[props.size]}`;

  return (
    <button
      className={className}
      id={props.id}
      name={props.name}
      onClick={props.onClick}
      type={props.type}
    >
      {props.value}
    </button>
  );
};
