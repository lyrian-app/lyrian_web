import React from "react";

import { ToastCard } from "../../../hooks";

import { Toast } from "..";
import style from "./toaster.module.scss";

interface ToasterProps {
  tousts: ToastCard[];
  eat: (card: ToastCard) => void;
}

export const Toaster = (props: ToasterProps) => {
  const onToastClick = (card: ToastCard) => () => props.eat(card);

  return (
    <div className={style.toaster}>
      {props.tousts.map((t) => (
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
