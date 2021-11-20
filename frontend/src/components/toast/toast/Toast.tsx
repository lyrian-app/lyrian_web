import React from "react";

import style from "./toast.module.scss";

interface ToastProps {
  type: "ok" | "warning" | "error";
  value?: string;
}

export const Toast = (props: ToastProps) => {
  const toastClass = `${style.toast} ${style[props.type]}`;
  const iconClass = `icon-${props.type} ${style.icon}`;

  return (
    <div className={toastClass}>
      <i className={iconClass} />
      <p className={style.discription}>{props.value}</p>
    </div>
  );
};
