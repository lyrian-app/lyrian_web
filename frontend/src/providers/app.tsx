import React from "react";
import { useReducer } from "react";

import {
  MarkovStateContext,
  MkvDispatchContext,
  LyricsStateContext,
  LycDispatchContext,
} from "./context";
import { lyricsUpdate, markovUpdate } from "../hooks";

const markovInitValue = {
  tokens: [{ word: "", mora: "", syllable: "", partOfSpeech: "" }],
  probsTable: [
    { aliases: Int32Array.from([0]), probs: Float32Array.from([0.0]) },
  ],
  length: 1,
};

const lyricsInitValue = {
  contents: "",
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [markov, mkvDispatch] = useReducer(markovUpdate, markovInitValue);
  const [lyrics, lyrDispatch] = useReducer(lyricsUpdate, lyricsInitValue);

  return (
    <MarkovStateContext.Provider value={markov}>
      <MkvDispatchContext.Provider value={mkvDispatch}>
        <LyricsStateContext.Provider value={lyrics}>
          <LycDispatchContext.Provider value={lyrDispatch}>
            {children}
          </LycDispatchContext.Provider>
        </LyricsStateContext.Provider>
      </MkvDispatchContext.Provider>
    </MarkovStateContext.Provider>
  );
};
