import { Token, MarkovState } from "./types";

type MarkovGeneratedMsg = {
  type: "MarkovGeneratedMsg";
  model: MarkovState;
};

type TokenFixedMsg = {
  type: "TokenUpdatedMsg";
  index: number;
  token: Token;
};

export type MarkovMsg = MarkovGeneratedMsg | TokenFixedMsg;

export const markovUpdate = (state: MarkovState, msg: MarkovMsg) => {
  switch (msg.type) {
    case "MarkovGeneratedMsg":
      return msg.model;

    case "TokenUpdatedMsg":
      let newTokens = state.state_space;
      newTokens[msg.index] = msg.token;
      return { ...state, state_space: newTokens };
  }
};
