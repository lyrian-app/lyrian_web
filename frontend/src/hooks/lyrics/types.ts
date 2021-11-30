export type MoraOrSyllable = "モーラ" | "シラブル";

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

/**
 * A state of Lyrics.
 */
export interface LyricsState {
  contents: string;
  verses: Verse[];
}
