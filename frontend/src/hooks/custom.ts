import { useState } from "react";

import { Bread } from ".";
import { generateUniqueKey } from "../utils/key";

export const useBoolState = (initValue: boolean): [boolean, () => void] => {
  const [bool, setBool] = useState(initValue);
  const toggle = () => setBool(!bool);
  return [bool, toggle];
};

export const useToast = () => {
  const [breads, setBreads] = useState<Bread[]>([]);

  const bake = (bread: Bread) => {
    let newBreads = breads.map((t) => t);
    newBreads.push({ ...bread, key: generateUniqueKey() });
    setBreads(newBreads);
  };

  const eat = (toastKey: string) => {
    const newBreads = breads.filter((b) => b.key !== toastKey);
    setBreads(newBreads);
  };

  return { breads, bake, eat };
};
