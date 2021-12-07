import React from "react";
import { useReducer } from "react";

import { MarkovContext, LyricsContext, ToasterContext } from "./context";
import { useToast } from "../hooks";
import { updateMarkov, PartOfSpeech } from "../hooks/markov";
import { updateLyrics, getInitialVerse } from "../hooks/lyrics";

import { Toaster } from "../components/toast";

const markovInitValue = {
  state_space: [
    { word: "", mora: "", syllable: "", part_of_speech: PartOfSpeech.unknown },
  ],
  wa_table: [{ aliases: [0], probs: [0.0] }],
  prev_index: 1,
};

const lyricsInitValue = {
  title: "",
  contents: "",
  verses: [getInitialVerse()],
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [markov, mkvDispatch] = useReducer(updateMarkov, markovInitValue);
  const [lyrics, lyrDispatch] = useReducer(updateLyrics, lyricsInitValue);
  const { breads, bake, eat } = useToast();

  return (
    <MarkovContext.Provider
      value={{ markov: markov, mkvDispatch: mkvDispatch }}
    >
      <LyricsContext.Provider
        value={{ lyrics: lyrics, lyrDispatch: lyrDispatch }}
      >
        <ToasterContext.Provider value={{ bake: bake }}>
          {children}
          <Toaster breads={breads} eat={eat} />
        </ToasterContext.Provider>
      </LyricsContext.Provider>
    </MarkovContext.Provider>
  );
};
