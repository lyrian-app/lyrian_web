import React from "react";

import style from "./modalOverlay.module.scss";

interface ModalProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const ModalOverlay = ({ onClick }: ModalProps) => {
  return <div className={style.modalOverlay} onClick={onClick} />;
};
