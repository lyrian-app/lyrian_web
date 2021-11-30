export interface ToastDough {
  key?: string;
  type: "ok" | "warning" | "error";
  value: string;
}
