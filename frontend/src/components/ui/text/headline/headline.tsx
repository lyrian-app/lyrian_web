import React from "react";

import style from "./headline.module.scss";

interface HeadlineProps {
  children: React.ReactNode;
}

export const H1 = ({ children }: HeadlineProps) => {
  return <h1 className={style.headline1}>{children}</h1>;
};

export const H2 = ({ children }: HeadlineProps) => {
  return <h2 className={style.headline2}>{children}</h2>;
};

export const H3 = ({ children }: HeadlineProps) => {
  return <h3 className={style.headline3}>{children}</h3>;
};
