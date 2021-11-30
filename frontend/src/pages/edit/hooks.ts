import { MoraOrSyllable } from "../../components/form";

import { Verse } from "./types";
import { getInitialLyric, getInitialVerse } from "./util";

type NewLyricAddedMsg = {
  type: "NewLyricAddedMsg";
  verseIdx: number;
  newLyricIdx: number;
};

type LyricValueChangedMsg = {
  type: "LyricValueChangedMsg";
  verseIdx: number;
  lyricIdx: number;
  newValue: string;
};

type NotesChangedMsg = {
  type: "NotesChangedMsg";
  verseIdx: number;
  lyricIdx: number;
  newNotes: number;
};

type UnitChagedMsg = {
  type: "UnitChangedMsg";
  verseIdx: number;
  lyricIdx: number;
  newUnit: MoraOrSyllable;
};

type LyricRemovedMsg = {
  type: "LyricRemovedMsg";
  verseIdx: number;
  key: string;
};

type VerseAddedMsg = {
  type: "VerseAddedMsg";
};

type VerseRenamedMsg = {
  type: "VerseRenamedMsd";
  verseIdx: number;
  newName: string;
};

type VerseRemovedMsg = {
  type: "VerseRemovedMsd";
  verseIdx: number;
};

type Msg =
  | NewLyricAddedMsg
  | LyricValueChangedMsg
  | NotesChangedMsg
  | UnitChagedMsg
  | LyricRemovedMsg
  | VerseAddedMsg
  | VerseRenamedMsg
  | VerseRemovedMsg;

export const updateVerses = (state: Verse[], msg: Msg) => {
  let newState = [...state];

  switch (msg.type) {
    case "NewLyricAddedMsg":
      if (msg.newLyricIdx === newState[msg.verseIdx].values.length) {
        newState[msg.verseIdx].values.push(getInitialLyric());
      }
      break;

    case "LyricValueChangedMsg":
      newState[msg.verseIdx].values[msg.lyricIdx].value = msg.newValue;
      break;

    case "NotesChangedMsg":
      newState[msg.verseIdx].values[msg.lyricIdx].notes = msg.newNotes;
      break;

    case "UnitChangedMsg":
      newState[msg.verseIdx].values[msg.lyricIdx].unit = msg.newUnit;
      break;

    case "LyricRemovedMsg":
      newState[msg.verseIdx].values = newState[msg.verseIdx].values.filter(
        (lyric) => lyric.key !== msg.key
      );
      break;

    case "VerseAddedMsg":
      newState.push(getInitialVerse());
      break;

    case "VerseRenamedMsd":
      newState[msg.verseIdx].name = msg.newName;
      break;

    case "VerseRemovedMsd":
      newState.splice(msg.verseIdx, 1);
      break;
  }

  return newState;
};
