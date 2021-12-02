import React from "react";

import style from "./titleInput.module.scss";

interface TitleInputProps {
  size: "small" | "medium" | "large" | "xlarge";
  defaultValue?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const TitleInput = (props: TitleInputProps) => {
  const className = `${style.titleInput} ${style[props.size]}`;

  return (
    <input
      className={className}
      type="text"
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};
