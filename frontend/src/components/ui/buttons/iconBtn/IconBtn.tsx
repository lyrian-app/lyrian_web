import React from "react";

import style from "./iconBtn.module.scss";

interface IconBtnProps {
  iconName: string;
  size: "small" | "medium" | "large";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const IconBtn = (props: IconBtnProps) => {
  const className = `iconBtn__${props.size}`;

  return (
    <div className={style[className]}>
      <i className={props.iconName} />
    </div>
  );
};
