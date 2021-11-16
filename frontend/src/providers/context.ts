import React from "react";
import { LyricsState, MarkovState, LyricsMsg, MarkovMsg } from "../hooks";

interface LyricsContextValues {
  state: LyricsState;
  dispatch: React.Dispatch<LyricsMsg>;
}

interface MarkovContextValues {
  state: MarkovState;
  dispatch: React.Dispatch<MarkovMsg>;
}

export const LyricsContext = React.createContext<
  LyricsContextValues | undefined
>(undefined);

export const MarkovContext = React.createContext<
  MarkovContextValues | undefined
>(undefined);
