import React from "react";
import { RenderResult, renderHook, act } from "@testing-library/react-hooks";
import { useReducer } from "react";
import {
  updateMarkov,
  MarkovState,
  MarkovMsg,
  PartOfSpeech,
} from "../../markov";

describe("updateMarkov", () => {
  let result: RenderResult<[MarkovState, React.Dispatch<MarkovMsg>]>;

  beforeEach(() => {
    const markov = {
      state_space: [
        {
          word: "",
          mora: "",
          syllable: "",
          part_of_speech: PartOfSpeech.unknown,
        },
      ],
      wa_table: [{ aliases: [0], probs: [0.0] }],
      prev_index: 1,
    };
    result = renderHook(() => useReducer(updateMarkov, markov)).result;
  });

  it("Read MarkovState", () => {
    const markov = {
      state_space: [
        {
          word: "テスト",
          mora: "テスト",
          syllable: "テスト",
          part_of_speech: PartOfSpeech.名詞,
        },
      ],
      wa_table: [{ aliases: [0], probs: [0.0] }],
      prev_index: 1,
    };

    act(() => result.current[1]({ type: "MarkovReadedMsg", model: markov }));

    expect(result.current[0].state_space[0].word).toBe("テスト");
  });

  it("Update Token in MarkovState", () => {
    const token = {
      word: "更新",
      mora: "コウシン",
      syllable: "コーシン",
      part_of_speech: PartOfSpeech.名詞,
    };

    act(() =>
      result.current[1]({ type: "TokenUpdatedMsg", index: 0, token: token })
    );

    expect(result.current[0].state_space[0].word).toBe("更新");
  });
});
