import React from "react";

import { PartOfSpeech } from "../../../hooks/markov";

import { TextInput, Option, Select } from "..";
import { Grid } from "../../layout";
import style from "./tokenCard.module.scss";

interface TokenCardProps {
  word: string;
  mora: string;
  syllable: string;
  partOfSpeech: string;
  onMoraChange: React.ChangeEventHandler<HTMLInputElement>;
  onSyllableChange: React.ChangeEventHandler<HTMLInputElement>;
  onPartChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export const TokenCard = (props: TokenCardProps) => {
  const parts = Object.values(PartOfSpeech).filter(
    (v) => v !== PartOfSpeech.unknown
  );

  return (
    <div className={style.tokenCard}>
      <p>表記</p>
      <p>{props.word}</p>
      <p>読み</p>
      <TextInput
        required={true}
        defaultValue={props.mora}
        onChange={props.onMoraChange}
      />
      <p>発音</p>
      <TextInput
        required={true}
        defaultValue={props.syllable}
        onChange={props.onSyllableChange}
      />
      <p>品詞</p>
      <Select
        defaultValue={props.partOfSpeech}
        onChange={props.onPartChange}
        required={true}
      >
        {parts.map((v) => (
          <Option value={v}>{v}</Option>
        ))}
      </Select>
    </div>
  );
};
