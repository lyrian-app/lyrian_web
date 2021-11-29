import React from "react";

export interface ToastCard {
  key: string;
  type: "ok" | "warning" | "error";
  value: string;
}

export const useToast = () => {
  const [toasts, setToasts] = React.useState<ToastCard[]>([]);

  const bake = (card: ToastCard) => {
    let newToasts = toasts.map((t) => t);
    newToasts.push(card);
    setToasts(newToasts);
  };

  const eat = (card: ToastCard) => {
    let newToasts = toasts.filter((t) => t.key !== card.key);
    setToasts(newToasts);
  };

  return { toasts, bake, eat };
};
