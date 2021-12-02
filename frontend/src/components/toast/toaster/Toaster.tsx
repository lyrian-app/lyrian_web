import React from "react";

import { Bread } from "../../../hooks";

import { Toast } from "..";
import style from "./toaster.module.scss";

interface ToasterProps {
  breads: Bread[];
  eat: (toastKey: string) => void;
}

export const Toaster = (props: ToasterProps) => {
  const onToastClick = (key: string) => () => props.eat(key);

  return (
    <div className={style.toaster}>
      {props.breads.map((b) => (
        <Toast
          key={b.key}
          type={b.type}
          value={b.value}
          onClick={onToastClick(b.key!)}
        />
      ))}
    </div>
  );
};
