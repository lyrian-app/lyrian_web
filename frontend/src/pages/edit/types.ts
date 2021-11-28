import { MoraOrSyllable } from "../../components/form";

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
