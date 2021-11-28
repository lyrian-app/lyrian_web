import { MoraOrSyllable } from "../../components/form";

import { getInitialLyric, getInitialSection, Section } from "./types";

type NewLyricAddedMsg = {
  type: "NewLyricAddedMsg";
  sectionIdx: number;
  newLyricIdx: number;
};

type LyricValueChangedMsg = {
  type: "LyricValueChangedMsg";
  sectionIdx: number;
  lyricIdx: number;
  newValue: string;
};

type NotesChangedMsg = {
  type: "NotesChangedMsg";
  sectionIdx: number;
  lyricIdx: number;
  newNotes: number;
};

type UnitChagedMsg = {
  type: "UnitChangedMsg";
  sectionIdx: number;
  lyricIdx: number;
  newUnit: MoraOrSyllable;
};

type LyricRemovedMsg = {
  type: "LyricRemovedMsg";
  sectionIdx: number;
  key: string;
};

type SectionAddedMsg = {
  type: "SectionAddedMsg";
};

type SectionRenamedMsg = {
  type: "SectionRenamedMsd";
  sectionIdx: number;
  newName: string;
};

type SectionRemovedMsg = {
  type: "SectionRemovedMsd";
  sectionIdx: number;
};

type Msg =
  | NewLyricAddedMsg
  | LyricValueChangedMsg
  | NotesChangedMsg
  | UnitChagedMsg
  | LyricRemovedMsg
  | SectionAddedMsg
  | SectionRenamedMsg
  | SectionRemovedMsg;

export const updateSections = (state: Section[], msg: Msg) => {
  let newState = [...state];

  switch (msg.type) {
    case "NewLyricAddedMsg":
      if (msg.newLyricIdx === newState[msg.sectionIdx].lyrics.length) {
        newState[msg.sectionIdx].lyrics.push(getInitialLyric());
      }
      break;

    case "LyricValueChangedMsg":
      newState[msg.sectionIdx].lyrics[msg.lyricIdx].value = msg.newValue;
      break;

    case "NotesChangedMsg":
      newState[msg.sectionIdx].lyrics[msg.lyricIdx].notes = msg.newNotes;
      break;

    case "UnitChangedMsg":
      newState[msg.sectionIdx].lyrics[msg.lyricIdx].unit = msg.newUnit;
      break;

    case "LyricRemovedMsg":
      newState[msg.sectionIdx].lyrics = newState[msg.sectionIdx].lyrics.filter(
        (lyric) => lyric.key !== msg.key
      );
      break;

    case "SectionAddedMsg":
      newState.push(getInitialSection());
      break;

    case "SectionRenamedMsd":
      newState[msg.sectionIdx].name = msg.newName;
      break;

    case "SectionRemovedMsd":
      newState.splice(msg.sectionIdx, 1);
      break;
  }

  return newState;
};