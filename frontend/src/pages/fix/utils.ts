import { MarkovState, PartOfSpeech } from "../../hooks";

export const getUnknownTokenIdxs = (state: MarkovState) => {
  return new Array(state.state_space.length)
    .fill(0)
    .map((_, i) => i)
    .filter((i) => {
      const token = state.state_space[i];
      return (
        token.mora === "unknown" ||
        token.syllable === "unknown" ||
        token.part_of_speech === PartOfSpeech.unknown
      );
    });
};
