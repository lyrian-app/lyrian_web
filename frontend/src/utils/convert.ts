import { PartOfSpeech } from "../hooks/markov";

export const stringToParts = (s: string) => {
  switch (s) {
    case "副詞":
      return PartOfSpeech.副詞;
    case "助動詞":
      return PartOfSpeech.助動詞;
    case "助詞":
      return PartOfSpeech.助詞;
    case "動詞":
      return PartOfSpeech.動詞;
    case "名詞":
      return PartOfSpeech.名詞;
    case "形容詞":
      return PartOfSpeech.形容詞;
    case "感動詞":
      return PartOfSpeech.感動詞;
    case "接続詞":
      return PartOfSpeech.接続詞;
    case "接頭詞":
      return PartOfSpeech.接頭詞;
    case "連体詞":
      return PartOfSpeech.連体詞;
    case "未知語":
      return PartOfSpeech.未知語;
    case "フィラー":
      return PartOfSpeech.フィラー;
    case "記号":
      return PartOfSpeech.記号;
    case "その他":
      return PartOfSpeech.その他;
    case "unknown":
      return PartOfSpeech.unknown;
    default:
      throw Error("Unsupported part of speech was entered.");
  }
};
