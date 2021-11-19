import React from "react";

import style from "./modalOverlay.module.scss";

interface ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

export const ModalOverlay = ({ isOpen, children }: ModalProps) => {
  const className = `${style.modal} ${style[isOpen ? "isOpen" : ""]}`;

  return <div className={className}>{children}</div>;
};
