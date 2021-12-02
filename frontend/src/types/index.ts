import { MarkovState } from "../hooks/markov";
import { LyricsState } from "../hooks/lyrics";

export interface SaveData {
  markov: MarkovState;
  lyrics: LyricsState;
}
