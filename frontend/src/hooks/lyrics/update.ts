import { LyricsState } from "./types";

type LyricsGeneretedMsg = {
  type: "LyricsGeneratedMsg";
  lyrics: string;
};

export type LyricsMsg = LyricsGeneretedMsg;

export const lyricsUpdate = (_state: LyricsState, msg: LyricsMsg) => {
  switch (msg.type) {
    case "LyricsGeneratedMsg":
      return { contents: msg.lyrics };
  }
};
