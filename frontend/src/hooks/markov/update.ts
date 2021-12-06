import { Token, MarkovState } from "./types";

type MarkovReadedMsg = {
  type: "MarkovReadedMsg";
  model: MarkovState;
};

type TokenUpdatedMsg = {
  type: "TokenUpdatedMsg";
  index: number;
  token: Token;
};

export type MarkovMsg = MarkovReadedMsg | TokenUpdatedMsg;

export const updateMarkov = (state: MarkovState, msg: MarkovMsg) => {
  switch (msg.type) {
    case "MarkovReadedMsg":
      return msg.model;

    case "TokenUpdatedMsg":
      let newTokens = state.state_space;
      newTokens[msg.index] = msg.token;
      return { ...state, state_space: newTokens };
  }
};
