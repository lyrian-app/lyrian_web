import { getInitialLyric, getInitialVerse } from "./init";
import { LyricsState, MoraOrSyllable } from "./types";
import { cloneObj } from "../../utils/clone";

type TitleChangedMsg = {
  type: "TitleChangedMsg";
  newTitle: string;
};

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
  newVerseIdx: number;
};

type VerseRenamedMsg = {
  type: "VerseRenamedMsd";
  verseIdx: number;
  newName: string;
};

type VerseRemovedMsg = {
  type: "VerseRemovedMsd";
  key: string;
};

type LyricsGeneretedMsg = {
  type: "LyricsGeneratedMsg";
};

export type LyricsMsg =
  | TitleChangedMsg
  | NewLyricAddedMsg
  | LyricValueChangedMsg
  | NotesChangedMsg
  | UnitChagedMsg
  | LyricRemovedMsg
  | VerseAddedMsg
  | VerseRenamedMsg
  | VerseRemovedMsg
  | LyricsGeneretedMsg;

export const lyricsUpdate = (state: LyricsState, msg: LyricsMsg) => {
  let newState = cloneObj(state);

  switch (msg.type) {
    case "TitleChangedMsg":
      newState.title = msg.newTitle;
      break;

    case "NewLyricAddedMsg":
      if (msg.newLyricIdx === newState.verses[msg.verseIdx].values.length) {
        newState.verses[msg.verseIdx].values.push(getInitialLyric());
      }
      break;

    case "LyricValueChangedMsg":
      newState.verses[msg.verseIdx].values[msg.lyricIdx].value = msg.newValue;
      break;

    case "NotesChangedMsg":
      newState.verses[msg.verseIdx].values[msg.lyricIdx].notes = msg.newNotes;
      break;

    case "UnitChangedMsg":
      newState.verses[msg.verseIdx].values[msg.lyricIdx].unit = msg.newUnit;
      break;

    case "LyricRemovedMsg":
      newState.verses[msg.verseIdx].values = newState.verses[
        msg.verseIdx
      ].values.filter((lyric) => lyric.key !== msg.key);
      break;

    case "VerseAddedMsg":
      if (msg.newVerseIdx === newState.verses.length) {
        newState.verses.push(getInitialVerse());
      }
      break;

    case "VerseRenamedMsd":
      newState.verses[msg.verseIdx].name = msg.newName;
      break;

    case "VerseRemovedMsd":
      newState.verses = newState.verses.filter(
        (verse) => verse.key !== msg.key
      );
      break;

    case "LyricsGeneratedMsg":
      const newContents = state.verses.reduce<string>((verseAcc, verse) => {
        const newValue = verse.values.reduce<string>(
          (lyricAcc, lyric) => lyricAcc + lyric.value + "\n",
          ""
        );
        const section = verse.name === "" ? "セクション" : verse.name;
        return `${verseAcc}## ${section}\n\n${newValue}\n`;
      }, "");

      const title = state.title === "" ? "タイトル" : state.title;
      newState.contents = `# ${title}\n\n${newContents}`;
      break;
  }

  return newState;
};
