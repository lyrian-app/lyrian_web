/**
 * A token of morphological analysis.
 */
export interface Token {
  word: string;
  mora: string;
  syllable: string;
  part_of_speech: PartOfSpeech;
}

/**
 * An enumeration of part of speech.
 */
export enum PartOfSpeech {
  副詞 = "副詞",
  助動詞 = "助動詞",
  助詞 = "助詞",
  動詞 = "動詞",
  名詞 = "名詞",
  形容詞 = "形容詞",
  感動詞 = "感動詞",
  接続詞 = "接続詞",
  接頭詞 = "接頭詞",
  記号 = "記号",
  連体詞 = "連体詞",
  フィラー = "フィラー",
  その他 = "その他",
  未知語 = "未知語",
  unknown = "unknown",
}

/**
 * A table of Walker's Alias Method.
 */
export interface WaTable {
  aliases: number[];
  probs: number[];
}

/**
 * A state of Markov chain model.
 */
export interface MarkovState {
  state_space: Token[];
  wa_table: WaTable[];
  prev_index: number;
}

/**
 * A state of Lyrics.
 */
export interface LyricsState {
  contents: string;
}
