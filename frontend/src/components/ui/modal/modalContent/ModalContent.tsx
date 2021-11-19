import React from "react";

import style from "./modalContent.module.scss";

interface ModalContentProps {
  children?: React.ReactNode;
  width?: string;
  height?: string;
}

export const ModalContent = (props: ModalContentProps) => {
  const contentStyle = {
    width: props.width,
    height: props.height,
  };

  return (
    <div className={style.modalContent} style={contentStyle}>
      {props.children}
    </div>
  );
};
