import React from "react";

import { IconBtn } from "../../buttons";
import { TextInput, Select, Option, NumberInput } from "..";
import style from "./lyricCard.module.scss";

interface LyricCardProps {
  onLyricGenerate?: React.MouseEventHandler<HTMLButtonElement>;
  onNotesChange?: React.ChangeEventHandler<HTMLInputElement>;
  onLyricChange?: React.ChangeEventHandler<HTMLInputElement>;
  onUnitChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

const useOpenState = (initValue: boolean): [boolean, () => void] => {
  const [isOpen, setIsOpen] = React.useState(initValue);
  const toggle = () => setIsOpen(!isOpen);
  return [isOpen, toggle];
};

export const LyricCard = (props: LyricCardProps) => {
  const [isOpen, toggle] = useOpenState(false);
  const iconName = isOpen ? " icon-up-open" : " icon-down-open";
  const bottomClass = `${style.bottom} ${isOpen ? style.isOpen : ""}`;

  return (
    <div className={style.lyricCard}>
      <div className={bottomClass}>
        <label htmlFor="unit">割り当て単位: </label>
        <Select
          defaultValue="シラブル"
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
          onClick={props.onLyricGenerate}
        />

        <label className={style.label} htmlFor="numInput">
          音数
        </label>
        <NumberInput
          name="numInput"
          defaultValue={3}
          max={20}
          min={1}
          onChange={props.onNotesChange}
        />

        <TextInput onChange={props.onLyricChange} />

        <div className={style.accordionBtn}>
          <IconBtn iconName={iconName} size="small" onClick={toggle} />
        </div>

        <div className={style.close}>
          <IconBtn
            iconName="icon-cancel"
            size="small"
            onClick={props.onClose}
          />
        </div>
      </div>
    </div>
  );
};
