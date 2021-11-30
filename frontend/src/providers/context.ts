import React from "react";
import { ToastDough } from "../hooks";
import { MarkovState, MarkovMsg } from "../hooks/markov";
import { LyricsState, LyricsMsg } from "../hooks/lyrics";

interface LyricsContextValues {
  lyrics: LyricsState;
  lyrDispatch: React.Dispatch<LyricsMsg>;
}

interface MarkovContextValues {
  markov: MarkovState;
  mkvDispatch: React.Dispatch<MarkovMsg>;
}

interface ToasterContextValue {
  bake: (dough: ToastDough) => void;
}

export const LyricsContext = React.createContext<
  LyricsContextValues | undefined
>(undefined);

export const MarkovContext = React.createContext<
  MarkovContextValues | undefined
>(undefined);

export const ToasterContext = React.createContext<
  ToasterContextValue | undefined
>(undefined);
