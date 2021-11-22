import React from "react";

import style from "./option.module.scss";

interface OptionProps {
  children?: React.ReactNode;
  value?: string;
}

export const Option = (props: OptionProps) => {
  return (
    <option className={style.option} value={props.value}>
      {props.children}
    </option>
  );
};
