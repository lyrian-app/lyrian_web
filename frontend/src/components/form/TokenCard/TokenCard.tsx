import React from "react";

import { PartOfSpeech } from "../../../hooks";

import { InputText, Option, Select } from "..";
import { Grid } from "../../grid";
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
      <Grid rows={2} cols={4} gap="1rem">
        <p>表記</p>
        <p>読み</p>
        <p>発音</p>
        <p>品詞</p>
        <p>{props.word}</p>
        <InputText
          required={true}
          defaultValue={props.mora}
          onChange={props.onMoraChange}
        />
        <InputText
          required={true}
          defaultValue={props.syllable}
          onChange={props.onSyllableChange}
        />
        <Select
          defaultValue="名詞"
          onChange={props.onPartChange}
          required={true}
        >
          {parts.map((v) => (
            <Option value={v}>{v}</Option>
          ))}
        </Select>
      </Grid>
    </div>
  );
};
