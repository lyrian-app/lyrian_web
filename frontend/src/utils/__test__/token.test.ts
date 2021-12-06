import { PartOfSpeech, Token } from "../../hooks/markov";
import { getUnknownTokenIdxes, hasUnknownTokens } from "../token";

const validTokens: Token[] = [
  {
    word: "テスト",
    mora: "テスト",
    syllable: "テスト",
    part_of_speech: PartOfSpeech.名詞,
  },
  {
    word: "テスト",
    mora: "テスト",
    syllable: "テスト",
    part_of_speech: PartOfSpeech.名詞,
  },
];

const invalidTokens: Token[] = [
  {
    word: "テスト",
    mora: "テスト",
    syllable: "テスト",
    part_of_speech: PartOfSpeech.名詞,
  },
  {
    word: "unknown",
    mora: "unknown",
    syllable: "unknown",
    part_of_speech: PartOfSpeech.unknown,
  },
];

describe("getUnknownTokenIdxes", () => {
  it("Return unknown token indexes", () => {
    expect(getUnknownTokenIdxes(invalidTokens)).toStrictEqual([1]);
  });

  it("Return empty array", () => {
    expect(getUnknownTokenIdxes(validTokens)).toStrictEqual([]);
  });
});

describe("hasUnknownTokens", () => {
  it("When a token has some unknown elements", () => {
    expect(hasUnknownTokens(invalidTokens)).toBe(true);
  });

  it("When a token does not has any unknown elements", () => {
    expect(hasUnknownTokens(validTokens)).toBe(false);
  });
});
