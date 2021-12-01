import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useBoolState } from "../../hooks";
import { MoraOrSyllable } from "../../hooks/lyrics";
import { MarkovContext, LyricsContext, ToasterContext } from "../../providers";
import { getVerseName, LyricValueGenerator } from "./util";

import { IconBtn, RectBtn } from "../../components/buttons";
import { Form, LyricCard, TitleInput } from "../../components/form";
import { Main } from "../../components/layout";
import { Modal, ModalContent, ModalOverlay } from "../../components/modal";
import { Discription, H2, H3 } from "../../components/text";
import {
  MountStatus,
  Transition,
  TRANSITION_TIME,
} from "../../components/transition";
import style from "./style.module.scss";

export const Edit = () => {
  const { markov } = useContext(MarkovContext)!;
  const { lyrics, lyrDispatch } = useContext(LyricsContext)!;
  const { bake } = useContext(ToasterContext)!;

  const [delTarget, setDelTarget] = useState<number | null>(0);
  const [isOpen, toggleModal] = useBoolState(false);
  const [status, setStatus] = useState<MountStatus>("willMount");

  const navigate = useNavigate();

  useEffect(() => {
    if (status === "willMount") setStatus("mounted");
  }, [status]);

  const onLyricGenerate = (i: number) => (j: number) => () => {
    try {
      let generator = new LyricValueGenerator(
        lyrics.verses[i].values[j],
        markov
      );
      const newValue = generator.generate();
      lyrDispatch({
        type: "LyricValueChangedMsg",
        verseIdx: i,
        lyricIdx: j,
        newValue: newValue,
      });
    } catch (e) {
      if (e instanceof Error) {
        bake({ type: "error", value: e.message });
      }
    }
  };

  const onLyricChange =
    (i: number) => (j: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      lyrDispatch({
        type: "LyricValueChangedMsg",
        verseIdx: i,
        lyricIdx: j,
        newValue: e.currentTarget.value,
      });
    };

  const onNotesChange =
    (i: number) => (j: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      lyrDispatch({
        type: "NotesChangedMsg",
        verseIdx: i,
        lyricIdx: j,
        newNotes: Number(e.currentTarget.value),
      });
    };

  const onUnitChange =
    (i: number) => (j: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      lyrDispatch({
        type: "UnitChangedMsg",
        verseIdx: i,
        lyricIdx: j,
        newUnit: e.currentTarget.value as MoraOrSyllable,
      });
    };

  const onCardClose = (i: number) => (key: string) => () => {
    lyrDispatch({ type: "LyricRemovedMsg", verseIdx: i, key: key });
  };

  const addNewLyricCard = (i: number) => () => {
    lyrDispatch({
      type: "NewLyricAddedMsg",
      verseIdx: i,
      newLyricIdx: lyrics.verses[i].values.length,
    });
  };

  const addNewVerse = () => {
    lyrDispatch({ type: "VerseAddedMsg", newVerseIdx: lyrics.verses.length });
  };

  const onVerseNameChanged =
    (i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      lyrDispatch({
        type: "VerseRenamedMsd",
        verseIdx: i,
        newName: e.currentTarget.value,
      });
    };

  const onVerseClose = (i: number) => () => {
    setDelTarget(i);
    toggleModal();
  };

  const deleteVerse = () => {
    lyrDispatch({
      type: "VerseRemovedMsd",
      key: lyrics.verses[delTarget!].key,
    });
    setDelTarget(null);
    toggleModal();
  };

  const onSubmit = () => {
    setStatus("willUnmount");
    lyrDispatch({ type: "LyricsGeneratedMsg" });
    setTimeout(() => navigate("/lyrics"), TRANSITION_TIME, false);
  };

  return (
    <Transition status={status}>
      <div className={style.edit}>
        <Main>
          <H2>歌詞作成</H2>
          <Discription>
            以下のフォームを入力して、歌詞を生成しましょう。
            <br />
            更新ボタンを押すことで、設定に合わせて歌詞を自動生成します。
          </Discription>
          <Form onSubmit={onSubmit}>
            {lyrics.verses.map((verse, i) => (
              <div className={style.lyricList} key={verse.key}>
                <TitleInput
                  defaultValue={verse.name}
                  onChange={onVerseNameChanged(i)}
                />
                {verse.values.map((lyric, j) => (
                  <LyricCard
                    key={lyric.key}
                    lyric={lyric.value}
                    notes={lyric.notes}
                    unit={lyric.unit as MoraOrSyllable}
                    onLyricGenerate={onLyricGenerate(i)(j)}
                    onLyricChange={onLyricChange(i)(j)}
                    onNotesChange={onNotesChange(i)(j)}
                    onUnitChange={onUnitChange(i)(j)}
                    onClose={onCardClose(i)(lyric.key)}
                  />
                ))}
                <IconBtn
                  iconName="icon-plus"
                  type="button"
                  size="small"
                  color="black"
                  onClick={addNewLyricCard(i)}
                />
                <div className={style.verseClose}>
                  <IconBtn
                    iconName="icon-cancel"
                    type="button"
                    size="small"
                    color="black"
                    onClick={onVerseClose(i)}
                  />
                </div>
              </div>
            ))}
            <IconBtn
              iconName="icon-plus"
              type="button"
              size="medium"
              color="black"
              onClick={addNewVerse}
            />
            <RectBtn value="完成" size="large" type="submit" />
          </Form>
        </Main>

        <Modal isOpen={isOpen}>
          <ModalOverlay onClick={toggleModal} />
          <ModalContent>
            <H3>{getVerseName(lyrics.verses, delTarget)}を削除しますか？</H3>
            <Discription>
              一度削除した要素を復元することはできません。
            </Discription>
            <RectBtn value="削除" size="medium" onClick={deleteVerse} />
          </ModalContent>
        </Modal>
      </div>
    </Transition>
  );
};
