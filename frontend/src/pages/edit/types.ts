import { MoraOrSyllable } from "../../components/form";

export interface Lyric {
  key: string;
  value: string;
  notes: number;
  unit: MoraOrSyllable;
}

export interface Verse {
  key: string;
  name: string;
  values: Lyric[];
}
