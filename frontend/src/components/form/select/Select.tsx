import React from "react";

import style from "./select.module.scss";

interface SelectProps {
  children?: React.ReactNode;
  name?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  required?: boolean;
}

export const Select = (props: SelectProps) => {
  return (
    <select
      className={style.select}
      name={props.name}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      required={props.required}
    >
      {props.children}
    </select>
  );
};
