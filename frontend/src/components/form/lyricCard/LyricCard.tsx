import React from "react";

import { useBoolState } from "../../../hooks";

import { IconBtn } from "../../buttons";
import { TextInput, Select, Option, NumberInput } from "..";
import style from "./lyricCard.module.scss";

export type MoraOrSyllable = "モーラ" | "シラブル";

interface LyricCardProps {
  lyric?: string;
  notes?: number;
  unit?: MoraOrSyllable;
  onLyricGenerate?: React.MouseEventHandler<HTMLButtonElement>;
  onNotesChange?: React.ChangeEventHandler<HTMLInputElement>;
  onLyricChange?: React.ChangeEventHandler<HTMLInputElement>;
  onUnitChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

export const LyricCard = (props: LyricCardProps) => {
  const [isOpen, toggleModal] = useBoolState(false);
  const iconName = isOpen ? " icon-up-open" : " icon-down-open";
  const bottomClass = `${style.bottom} ${isOpen ? style.isOpen : ""}`;

  return (
    <div className={style.lyricCard}>
      <div className={bottomClass}>
        <label htmlFor="unit">割り当て単位: </label>
        <Select
          defaultValue={props.unit}
          name="unit"
          onChange={props.onUnitChange}
        >
          <Option value="シラブル">シラブル</Option>
          <Option value="モーラ">モーラ</Option>
        </Select>
      </div>

      <div className={style.top}>
        <IconBtn
          iconName="icon-arrows-cw"
          size="medium"
          color="black"
          onClick={props.onLyricGenerate}
        />

        <label className={style.label} htmlFor="notes">
          音数
        </label>
        <NumberInput
          name="notes"
          defaultValue={props.notes}
          max={20}
          min={1}
          onChange={props.onNotesChange}
        />

        <TextInput defaultValue={props.lyric} onChange={props.onLyricChange} />

        <div className={style.accordionBtn}>
          <IconBtn
            iconName={iconName}
            size="small"
            color="black"
            onClick={toggleModal}
          />
        </div>

        <div className={style.close}>
          <IconBtn
            iconName="icon-cancel"
            size="small"
            color="black"
            onClick={props.onClose}
          />
        </div>
      </div>
    </div>
  );
};
