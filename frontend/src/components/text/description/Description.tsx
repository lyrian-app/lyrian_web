import React from "react";

import style from "./description.module.scss";

interface DescriptionProps {
  children?: React.ReactNode;
}

export const Description = ({ children }: DescriptionProps) => {
  return <p className={style.description}>{children}</p>;
};
