import React from "react";

import style from "./form.module.scss";

interface FormProps {
  children?: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export const Form = (props: FormProps) => {
  return (
    <>
      <form className={style.form} target="avoid" onSubmit={props.onSubmit}>
        {props.children}
      </form>
      <iframe className={style.avoid} name="avoid" />
    </>
  );
};
