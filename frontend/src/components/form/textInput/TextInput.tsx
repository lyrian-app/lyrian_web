import React from "react";

import style from "./textInput.module.scss";

interface TextInputProps {
  defaultValue?: string;
  ref?: React.MutableRefObject<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const TextInput = (props: TextInputProps) => {
  return (
    <input
      className={style.textInput}
      ref={props.ref}
      type="text"
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      onChange={props.onChange}
      required={props.required}
    />
  );
};
