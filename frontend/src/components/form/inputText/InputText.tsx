import React from "react";

import style from "./inputText.module.scss";

interface InputTextProps {
  defaultValue?: string;
  ref?: React.MutableRefObject<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputText = (props: InputTextProps) => {
  return (
    <input
      className={style.inputText}
      ref={props.ref}
      type="text"
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      onChange={props.onChange}
      required={props.required}
    />
  );
};
