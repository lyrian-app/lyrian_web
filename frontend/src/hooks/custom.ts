import { useState } from "react";

export const useBoolState = (initValue: boolean): [boolean, () => void] => {
  const [bool, setBool] = useState(initValue);
  const toggle = () => setBool(!bool);
  return [bool, toggle];
};
