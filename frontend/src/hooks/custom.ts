import { useState } from "react";

export const useBoolState = (initValue: boolean): [boolean, () => void] => {
  const [bool, setBool] = useState(initValue);
  const toggle = () => setBool(!bool);
  return [bool, toggle];
};

export interface ToastCard {
  key: string;
  type: "ok" | "warning" | "error";
  value: string;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastCard[]>([]);

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
