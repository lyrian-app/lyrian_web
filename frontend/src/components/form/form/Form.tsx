import React from "react";

import { ToasterContext } from "../../../providers";

import style from "./form.module.scss";

interface FormProps {
  children?: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export const Form = (props: FormProps) => {
  const { bake } = React.useContext(ToasterContext)!;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      if (props.onSubmit !== undefined) props.onSubmit(e);
    } catch (err) {
      bake({ type: "error", value: `${err}` });
    } finally {
      return false;
    }
  };

  return (
    <>
      <form className={style.form} target="avoid" onSubmit={onSubmit}>
        {props.children}
      </form>
      <iframe className={style.avoid} name="avoid" title="avoid" />
    </>
  );
};
