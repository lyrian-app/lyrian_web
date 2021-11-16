import React from "react";

import style from "./rectBtn.module.scss";

interface RectBtnProps {
  size: "small" | "medium" | "large";
  value?: string;
  id?: "";
  name?: "";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const RectBtn = (props: RectBtnProps) => {
  const className = `rectBtn__${props.size}`;

  return (
    <button
      className={style[className]}
      id={props.id}
      name={props.name}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};
