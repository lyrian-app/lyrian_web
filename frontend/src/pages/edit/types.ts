import { MoraOrSyllable } from "../../components/form";
import { generateUniqueKey } from "../../utils/key";

export interface Lyric {
  key: string;
  value: string;
  notes: number;
  unit: MoraOrSyllable;
}

export interface Section {
  key: string;
  name: string;
  lyrics: Lyric[];
}

export const getInitialLyric = () => ({
  key: generateUniqueKey(),
  value: "",
  notes: 3,
  unit: "シラブル" as MoraOrSyllable,
});

export const getInitialSection = () => ({
  key: generateUniqueKey(),
  name: "セクション",
  lyrics: [getInitialLyric()],
});
