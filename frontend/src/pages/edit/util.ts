import { Section } from "./types";
import { generateUniqueKey } from "../../utils/key";
import { MoraOrSyllable } from "../../components/form";

export const getInitialLyric = () => ({
  key: generateUniqueKey(),
  value: "",
  notes: 3,
  unit: "シラブル" as MoraOrSyllable,
});

export const getInitialSection = () => ({
  key: generateUniqueKey(),
  name: "",
  lyrics: [getInitialLyric()],
});

export const getSectionName = (sections: Section[], index: number | null) => {
  if (index === null) return "";
  if (sections[index].name === "") return "無名のセクション";
  return `${sections[index].name}セクション`;
};
