export interface Bread {
  key?: string;
  type: "ok" | "warning" | "error";
  value: string;
}
