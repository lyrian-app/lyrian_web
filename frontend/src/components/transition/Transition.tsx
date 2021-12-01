import React from "react";

import { MountStatus } from "./types";

import style from "./transition.module.scss";

export const TRANSITION_TIME = 300;

interface TransitionProps {
  children?: React.ReactNode;
  status: MountStatus;
}

export const Transition = (props: TransitionProps) => {
  const className = `${style.transition} ${style[props.status]}`;
  const transStyle = { transitionDuration: `${TRANSITION_TIME / 1000}s` };

  return (
    <div className={className} style={transStyle}>
      {props.children}
    </div>
  );
};
