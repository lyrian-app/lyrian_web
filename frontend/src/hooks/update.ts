import { Token, MarkovState, LyricsState } from "./types";

type MarkovGeneratedMsg = {
  type: "MarkovGeneratedMsg";
  model: MarkovState;
};

type TokenFixedMsg = {
  type: "TokenUpdatedMsg";
  index: number;
  token: Token;
};

type LyricsGeneretedMsg = {
  type: "LyricsGeneratedMsg";
  lyrics: string;
};

export type MarkovMsg = MarkovGeneratedMsg | TokenFixedMsg;

export type LyricsMsg = LyricsGeneretedMsg;

export const markovUpdate = (state: MarkovState, msg: MarkovMsg) => {
  switch (msg.type) {
    case "MarkovGeneratedMsg":
      return msg.model;

    case "TokenUpdatedMsg":
      let newTokens = state.state_space;
      newTokens[msg.index] = msg.token;
      return { ...state, tokens: newTokens };
  }
};

export const lyricsUpdate = (_state: LyricsState, msg: LyricsMsg) => {
  switch (msg.type) {
    case "LyricsGeneratedMsg":
      return { contents: msg.lyrics };
  }
};
