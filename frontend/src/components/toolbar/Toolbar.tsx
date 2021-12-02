import React from "react";

import style from "./toolbar.module.scss";

interface ToolbarProps {
  children?: React.ReactNode;
}

export const Toolbar = ({ children }: ToolbarProps) => {
  return <div className={style.toolbar}>{children}</div>;
};
