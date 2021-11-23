import React from "react";

import style from "./main.module.scss";

interface MainProps {
  children?: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <div className={style.main}>{children}</div>;
};
