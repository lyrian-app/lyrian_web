import React, { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useBoolState } from "../../hooks";
import { MarkovContext, LyricsContext } from "../../providers";
import { updateSections } from "./hooks";
import { getSectionName, getInitialSection, LyricGenerator } from "./util";

import { IconBtn, RectBtn } from "../../components/buttons";
import { Footer } from "../../components/footer";
import {
  Form,
  LyricCard,
  MoraOrSyllable,
  TitleInput,
} from "../../components/form";
import { Main } from "../../components/layout";
import { Modal, ModalContent, ModalOverlay } from "../../components/modal";
import { Discription, H2, H3 } from "../../components/text";
import style from "./style.module.scss";

export const Edit = () => {
  const { markov } = useContext(MarkovContext)!;
  const { dispatch } = useContext(LyricsContext)!;
  const [sections, sectionDispatch] = useReducer(updateSections, [
    getInitialSection(),
  ]);
  const [delTarget, setDelTarget] = useState<number | null>(0);
  const [isOpen, toggleModal] = useBoolState(false);
  const navigate = useNavigate();

  const onLyricGenerate = (i: number) => (j: number) => () => {
    try {
      let generator = new LyricGenerator(sections[i].verse[j], markov);
      const newValue = generator.generate();
      sectionDispatch({
        type: "LyricValueChangedMsg",
        sectionIdx: i,
        lyricIdx: j,
        newValue: newValue,
      });
    } catch (e) {
      alert(e);
    }
  };

  const onLyricChange =
    (i: number) => (j: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      sectionDispatch({
        type: "LyricValueChangedMsg",
        sectionIdx: i,
        lyricIdx: j,
        newValue: e.currentTarget.value,
      });
    };

  const onNotesChange =
    (i: number) => (j: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      sectionDispatch({
        type: "NotesChangedMsg",
        sectionIdx: i,
        lyricIdx: j,
        newNotes: Number(e.currentTarget.value),
      });
    };

  const onUnitChange =
    (i: number) => (j: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      sectionDispatch({
        type: "UnitChangedMsg",
        sectionIdx: i,
        lyricIdx: j,
        newUnit: e.currentTarget.value as MoraOrSyllable,
      });
    };

  const onCardClose = (i: number) => (key: string) => () => {
    sectionDispatch({ type: "LyricRemovedMsg", sectionIdx: i, key: key });
  };

  const addNewLyricCard = (i: number) => () => {
    sectionDispatch({
      type: "NewLyricAddedMsg",
      sectionIdx: i,
      newLyricIdx: sections[i].verse.length,
    });
  };

  const addNewSection = () => {
    sectionDispatch({ type: "SectionAddedMsg" });
  };

  const onSectionNameChanged =
    (i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      sectionDispatch({
        type: "SectionRenamedMsd",
        sectionIdx: i,
        newName: e.currentTarget.value,
      });
    };

  const onSectionClose = (i: number) => () => {
    setDelTarget(i);
    toggleModal();
  };

  const deleteSection = () => {
    sectionDispatch({ type: "SectionRemovedMsd", sectionIdx: delTarget! });
    setDelTarget(null);
    toggleModal();
  };

  const onSubmit = () => {
    const newLyrics = sections.reduce<string>((sectionAcc, sectionCur) => {
      const newLyric = sectionCur.verse.reduce<string>(
        (lyricAcc, lyricCur) => lyricAcc + lyricCur.value + "\n",
        ""
      );
      return sectionAcc + newLyric + "\n";
    }, "");
    dispatch({ type: "LyricsGeneratedMsg", lyrics: newLyrics });
    navigate("/lyrics");
    return false;
  };

  return (
    <div className={style.edit}>
      <Main>
        <H2>歌詞作成</H2>
        <Discription>hogehoge</Discription>
        <Form onSubmit={onSubmit}>
          {sections.map((section, i) => (
            <div className={style.lyricList} key={section.key}>
              <TitleInput
                defaultValue={section.name}
                onChange={onSectionNameChanged(i)}
              />
              {section.verse.map((lyric, j) => (
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
              <div className={style.sectionClose}>
                <IconBtn
                  iconName="icon-cancel"
                  type="button"
                  size="small"
                  color="black"
                  onClick={onSectionClose(i)}
                />
              </div>
            </div>
          ))}
          <IconBtn
            iconName="icon-plus"
            type="button"
            size="medium"
            color="black"
            onClick={addNewSection}
          />
          <RectBtn value="hoge" size="medium" type="submit" />
        </Form>
      </Main>

      <Modal isOpen={isOpen}>
        <ModalOverlay onClick={toggleModal} />
        <ModalContent>
          <H3>{getSectionName(sections, delTarget)}を削除しますか？</H3>
          <Discription>
            一度削除した要素を復元することはできません。
          </Discription>
          <RectBtn value="削除" size="medium" onClick={deleteSection} />
        </ModalContent>
      </Modal>

      <Footer />
    </div>
  );
};
