import React from "react";

import style from "./discription.module.scss";

interface DiscriptionProps {
  children?: React.ReactNode;
}

export const Discription = ({ children }: DiscriptionProps) => {
  return <p className={style.discription}>{children}</p>;
};
