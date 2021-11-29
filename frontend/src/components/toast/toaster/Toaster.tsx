import React from "react";

import { ToastDough } from "../../../hooks";

import { Toast } from "..";
import style from "./toaster.module.scss";

interface ToasterProps {
  toasts: ToastDough[];
  eat: (card: ToastDough) => void;
}

export const Toaster = (props: ToasterProps) => {
  const onToastClick = (card: ToastDough) => () => props.eat(card);

  return (
    <div className={style.toaster}>
      {props.toasts.map((t) => (
        <Toast
          key={t.key}
          type={t.type}
          value={t.value}
          onClick={onToastClick(t)}
        />
      ))}
    </div>
  );
};
