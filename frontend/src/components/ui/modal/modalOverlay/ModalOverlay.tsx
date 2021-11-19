import React from "react";

import style from "./modalOverlay.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
}

export const ModalOverlay = ({ isOpen, onClick, children }: ModalProps) => {
  const className = `${style.modalOverlay} ${style[isOpen ? "isOpen" : ""]}`;

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};
