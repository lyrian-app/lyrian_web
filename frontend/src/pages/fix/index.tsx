import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Token } from "../../hooks/markov";
import { MarkovContext } from "../../providers";
import { stringToParts } from "../../utils/convert";
import { getUnknownTokenIdxes } from "../../utils/token";

import { RectBtn } from "../../components/buttons";
import { Form, TokenCard } from "../../components/form";
import { Main } from "../../components/layout";
import { Description, H2 } from "../../components/text";
import {
  MountStatus,
  Transition,
  TRANSITION_TIME,
} from "../../components/transition";
import style from "./style.module.scss";

export const Fix = () => {
  const { markov, mkvDispatch } = useContext(MarkovContext)!;

  const idxes = getUnknownTokenIdxes(markov.state_space);
  const [moras, setMoras] = useState(Array<string>(idxes.length).fill(""));
  const [syllables, setSyllables] = useState(
    Array<string>(idxes.length).fill("")
  );
  const [parts, setParts] = useState(Array<string>(idxes.length).fill("名詞"));
  const [status, setStatus] = useState<MountStatus>("willMount");

  const navigate = useNavigate();

  useEffect(() => {
    if (status === "willMount") setStatus("mounted");
  }, [status]);

  const onMoraChange =
    (i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      let newMoras = moras;
      newMoras[i] = e.target.value;
      setMoras(newMoras);
    };

  const onSyllableChange =
    (i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      let newSyllables = syllables;
      newSyllables[i] = e.target.value;
      setSyllables(newSyllables);
    };

  const onPartsChange =
    (i: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      let newParts = parts;
      newParts[i] = e.target.value;
      setParts(newParts);
    };

  const onFix = () => {
    setStatus("willUnmount");

    const tokenSummaries = idxes.map((tokenIndex, i) => {
      let newToken: Token = {
        ...markov.state_space[tokenIndex],
        mora: moras[i],
        syllable: syllables[i],
        part_of_speech: stringToParts(parts[i]),
      };
      return { tokenIndex: tokenIndex, token: newToken };
    });
    tokenSummaries.forEach((summary) =>
      mkvDispatch({
        type: "TokenUpdatedMsg",
        index: summary.tokenIndex,
        token: summary.token,
      })
    );

    setTimeout(() => navigate("/edit"), TRANSITION_TIME, false);
  };

  return (
    <Transition status={status}>
      <div className={style.fix}>
        <Main>
          <H2>単語の修正</H2>
          <Description>
            読みや発音、品詞が不明な単語が見つかりました。
            <br />
            以下の例に従って情報を追記してください。
            <br />
            例：大空 → 読み「オオゾラ」、発音「オーゾラ」、品詞「名詞」
          </Description>

          <Form onSubmit={onFix}>
            <div className={style.tokenList}>
              {idxes.map((tokenIndex, i) => (
                <TokenCard
                  key={markov.state_space[tokenIndex].word}
                  word={markov.state_space[tokenIndex].word}
                  mora={moras[i]}
                  syllable={syllables[i]}
                  partOfSpeech={parts[i]}
                  onMoraChange={onMoraChange(i)}
                  onSyllableChange={onSyllableChange(i)}
                  onPartChange={onPartsChange(i)}
                />
              ))}
            </div>

            <RectBtn value="決定" size="large" type="submit" />
          </Form>
        </Main>
      </div>
    </Transition>
  );
};
