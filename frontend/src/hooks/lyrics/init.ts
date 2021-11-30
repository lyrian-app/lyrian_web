import { MoraOrSyllable } from ".";
import { generateUniqueKey } from "../../utils/key";

export const getInitialLyric = () => ({
  key: generateUniqueKey(),
  value: "",
  notes: 3,
  unit: "シラブル" as MoraOrSyllable,
});

export const getInitialVerse = () => ({
  key: generateUniqueKey(),
  name: "",
  values: [getInitialLyric()],
});
