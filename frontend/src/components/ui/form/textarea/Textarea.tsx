import React from "react";

import style from "./textarea.module.scss";

interface TextareaProps {
  name?: string;
  ref?: React.RefObject<HTMLTextAreaElement>;
  value?: string;
  placeholder?: string;
  readOnly?: boolean;
}

export const Textarea = (props: TextareaProps) => {
  return (
    <div className={style.outer}>
      <textarea
        className={style.textarea}
        name={props.name}
        ref={props.ref}
        value={props.value}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
      />
    </div>
  );
};
