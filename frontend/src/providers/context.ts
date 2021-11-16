import React from "react";
import { LyricsState, MarkovState, LyricsMsg, MarkovMsg } from "../hooks";

export const LyricsStateContext = React.createContext<LyricsState | undefined>(
  undefined
);
export const MarkovStateContext = React.createContext<MarkovState | undefined>(
  undefined
);
export const LycDispatchContext = React.createContext<
  React.Dispatch<LyricsMsg> | undefined
>(undefined);
export const MkvDispatchContext = React.createContext<
  React.Dispatch<MarkovMsg> | undefined
>(undefined);
