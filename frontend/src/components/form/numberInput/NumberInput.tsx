import React from "react";

import style from "./numberInput.module.scss";

interface NumberInputProps {
  defaultValue?: number;
  max?: number;
  min?: number;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const NumberInput = (props: NumberInputProps) => {
  return (
    <input
      className={style.numberInput}
      type="number"
      defaultValue={props.defaultValue}
      max={props.max}
      min={props.min}
      onChange={props.onChange}
      required={props.required}
    />
  );
};
