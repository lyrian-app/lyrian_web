import React from "react";
import { useReducer } from "react";

import { MarkovContext, LyricsContext, ToasterContext } from "./context";
import { useToast } from "../hooks";
import { markovUpdate, PartOfSpeech } from "../hooks/markov";
import { lyricsUpdate } from "../hooks/lyrics";

import { Toaster } from "../components/toast";

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
  const { toasts, bake, eat } = useToast();

  return (
    <MarkovContext.Provider value={{ markov: markov, dispatch: mkvDispatch }}>
      <LyricsContext.Provider value={{ lyrics: lyrics, dispatch: lyrDispatch }}>
        <ToasterContext.Provider value={{ bake: bake }}>
          {children}
          <Toaster toasts={toasts} eat={eat} />
        </ToasterContext.Provider>
      </LyricsContext.Provider>
    </MarkovContext.Provider>
  );
};
