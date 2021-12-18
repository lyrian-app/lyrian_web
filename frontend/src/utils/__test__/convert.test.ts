import { stringToParts } from "../convert";
import { PartOfSpeech } from "../../hooks/markov";

describe("stringToParts", () => {
  const listedString = [
    "副詞",
    "助動詞",
    "助詞",
    "動詞",
    "名詞",
    "形容詞",
    "感動詞",
    "接続詞",
    "接頭詞",
    "連体詞",
    "未知語",
    "フィラー",
    "記号",
    "その他",
    "unknown",
  ];

  const listedPart = [
    PartOfSpeech.副詞,
    PartOfSpeech.助動詞,
    PartOfSpeech.助詞,
    PartOfSpeech.動詞,
    PartOfSpeech.名詞,
    PartOfSpeech.形容詞,
    PartOfSpeech.感動詞,
    PartOfSpeech.接続詞,
    PartOfSpeech.接頭詞,
    PartOfSpeech.連体詞,
    PartOfSpeech.未知語,
    PartOfSpeech.フィラー,
    PartOfSpeech.記号,
    PartOfSpeech.その他,
    PartOfSpeech.unknown,
  ];

  it("Convert string to PartOfSpeech", () => {
    const actual = listedString.map((v) => stringToParts(v));
    expect(actual).toStrictEqual(listedPart);
  });

  it("When invalid string was input", () => {
    expect(() => stringToParts("something")).toThrow(
      "Unsupported part of speech was entered."
    );
  });
});
