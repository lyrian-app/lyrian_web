import React from "react";

import style from "./grid.module.scss";

interface GridProps {
  children?: React.ReactNode;
  rows?: number;
  cols?: number;
  gap?: string;
}

export const Grid = ({ children, rows, cols, gap }: GridProps) => {
  const rowFr = Array(rows)
    .fill("")
    .reduce((acc: string) => acc + " 1fr", "");
  const colFr = Array(cols)
    .fill("")
    .reduce((acc: string) => acc + " 1fr", "");

  const gridStyle = {
    gridTemplateRows: rowFr,
    gridTemplateColumns: colFr,
    gap: gap,
  };

  return (
    <div className={style.grid} style={gridStyle}>
      {children}
    </div>
  );
};
