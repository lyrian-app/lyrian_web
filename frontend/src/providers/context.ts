import React from "react";
import {
  LyricsState,
  MarkovState,
  LyricsMsg,
  MarkovMsg,
  ToastDough,
} from "../hooks";

interface LyricsContextValues {
  lyrics: LyricsState;
  dispatch: React.Dispatch<LyricsMsg>;
}

interface MarkovContextValues {
  markov: MarkovState;
  dispatch: React.Dispatch<MarkovMsg>;
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
