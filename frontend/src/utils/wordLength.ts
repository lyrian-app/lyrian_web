import { MoraOrSyllable } from "../components/form";
import { Token } from "../hooks";
import { LOWER_CASE, SYLLABLE_CHARS, SYMBOLS } from "./chars";

export const calcWordLen = (token: Token, unit: MoraOrSyllable) => {
  let soundLen;

  switch (unit) {
    case "モーラ":
      soundLen = token.mora.length;
      soundLen -= dupNum(token.mora.split(""), LOWER_CASE.concat(SYMBOLS));
      break;

    case "シラブル":
      soundLen = token.syllable.length;
      let count = dupNum(
        token.syllable.split(""),
        SYLLABLE_CHARS.concat(LOWER_CASE, SYMBOLS)
      );
      soundLen -= count;
      break;
  }

  return soundLen;
};

function dupNum<T>(list1: T[], list2: T[]) {
  let num = 0;
  for (let i of list1) {
    for (let j of list2) {
      if (i === j) num += 1;
    }
  }
  return num;
}
