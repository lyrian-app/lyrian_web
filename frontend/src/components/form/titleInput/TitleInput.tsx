import React from "react";

import style from "./titleInput.module.scss";

interface TitleInputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
}

export const TitleInput = (props: TitleInputProps) => {
  return (
    <div className={style.titleInput}>
      <input
        className={style.input}
        type="text"
        defaultValue={props.defaultValue}
        placeholder="セクション名"
        onChange={props.onChange}
      />
    </div>
  );
};
