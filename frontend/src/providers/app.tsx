import React from "react";
import { useReducer } from "react";

import { MarkovContext, LyricsContext } from "./context";
import { lyricsUpdate, markovUpdate, PartOfSpeech } from "../hooks";

const markovInitValue = {
  state_space: [
    { word: "", mora: "", syllable: "", part_of_speech: PartOfSpeech.unknown },
  ],
  wa_table: [{ aliases: [0], probs: [0.0] }],
  prev_index: 1,
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
    <MarkovContext.Provider value={{ markov: markov, dispatch: mkvDispatch }}>
      <LyricsContext.Provider value={{ lyrics: lyrics, dispatch: lyrDispatch }}>
        {children}
      </LyricsContext.Provider>
    </MarkovContext.Provider>
  );
};
