import { useState } from "react";

export const useBoolState = (initValue: boolean): [boolean, () => void] => {
  const [bool, setBool] = useState(initValue);
  const toggle = () => setBool(!bool);
  return [bool, toggle];
};

export interface ToastDough {
  key: string;
  type: "ok" | "warning" | "error";
  value: string;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastDough[]>([]);

  const bake = (card: ToastDough) => {
    let newToasts = toasts.map((t) => t);
    newToasts.push(card);
    setToasts(newToasts);
  };

  const eat = (card: ToastDough) => {
    let newToasts = toasts.filter((t) => t.key !== card.key);
    setToasts(newToasts);
  };

  return { toasts, bake, eat };
};
