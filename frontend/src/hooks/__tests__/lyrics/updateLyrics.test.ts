import React from "react";
import { RenderResult, renderHook, act } from "@testing-library/react-hooks";
import { useReducer } from "react";
import {
  updateLyrics,
  LyricsMsg,
  LyricsState,
  getInitialVerse,
  getInitialLyric,
} from "../../lyrics";

describe("updateLyrics", () => {
  let result: RenderResult<[LyricsState, React.Dispatch<LyricsMsg>]>;

  beforeEach(() => {
    const lyrics: LyricsState = {
      title: "テスト",
      contents: "",
      verses: [
        {
          key: "something",
          name: "Aメロ",
          values: [
            {
              key: "something",
              value: "サクラ",
              notes: 3,
              unit: "シラブル",
            },
          ],
        },
      ],
    };
    result = renderHook(() => useReducer(updateLyrics, lyrics)).result;
  });

  it("Read LyricsState", () => {
    const lyrics: LyricsState = {
      title: "updated",
      contents: "",
      verses: [getInitialVerse()],
    };

    act(() =>
      result.current[1]({ type: "LyricsReadedMsg", newLyrics: lyrics })
    );

    expect(result.current[0]).toStrictEqual(lyrics);
  });

  it("Change title", () => {
    act(() =>
      result.current[1]({ type: "TitleChangedMsg", newTitle: "updated" })
    );
    expect(result.current[0].title).toBe("updated");
  });

  it("Generate lyrics", () => {
    act(() => result.current[1]({ type: "LyricsGeneratedMsg" }));
    expect(result.current[0].contents).toBe(`# テスト

## Aメロ

サクラ

`);
  });

  it("Add new verse", () => {
    act(() => {
      const len = result.current[0].verses.length;
      result.current[1]({ type: "VerseAddedMsg", newVerseIdx: len });
    });
    expect(result.current[0].verses[1]).toStrictEqual(getInitialVerse());
  });

  it("Rename verse name", () => {
    act(() =>
      result.current[1]({
        type: "VerseRenamedMsd",
        verseIdx: 0,
        newName: "updated",
      })
    );
    expect(result.current[0].verses[0].name).toBe("updated");
  });

  it("Remove verse", () => {
    act(() => result.current[1]({ type: "VerseRemovedMsd", key: "something" }));
    expect(result.current[0].verses.length).toBe(0);
  });

  it("Add new lyric", () => {
    act(() => {
      const len = result.current[0].verses[0].values.length;
      result.current[1]({
        type: "NewLyricAddedMsg",
        verseIdx: 0,
        newLyricIdx: len,
      });
    });
    expect(result.current[0].verses[0].values[1]).toStrictEqual(
      getInitialLyric()
    );
  });

  it("Change lyric value", () => {
    act(() =>
      result.current[1]({
        type: "LyricValueChangedMsg",
        verseIdx: 0,
        lyricIdx: 0,
        newValue: "updated",
      })
    );
    expect(result.current[0].verses[0].values[0].value).toBe("updated");
  });

  it("Change notes", () => {
    act(() =>
      result.current[1]({
        type: "NotesChangedMsg",
        verseIdx: 0,
        lyricIdx: 0,
        newNotes: 5,
      })
    );
    expect(result.current[0].verses[0].values[0].notes).toBe(5);
  });

  it("Change unit", () => {
    act(() =>
      result.current[1]({
        type: "UnitChangedMsg",
        verseIdx: 0,
        lyricIdx: 0,
        newUnit: "モーラ",
      })
    );
    expect(result.current[0].verses[0].values[0].unit).toBe("モーラ");
  });

  it("Remove lyric", () => {
    act(() =>
      result.current[1]({
        type: "LyricRemovedMsg",
        verseIdx: 0,
        key: "something",
      })
    );
    expect(result.current[0].verses[0].values.length).toBe(0);
  });
});
