import React from "react";

import { IconBtn } from "../../buttons";
import { TextInput, Select, Option, NumberInput } from "..";
import style from "./lyricCard.module.scss";

interface LyricCardProps {}

const useOpenState = (initValue: boolean): [boolean, () => void] => {
  const [isOpen, setIsOpen] = React.useState(initValue);
  const toggle = () => setIsOpen(!isOpen);
  return [isOpen, toggle];
};

export const LyricCard = (props: LyricCardProps) => {
  const [isOpen, toggle] = useOpenState(false);
  const accordionBtnClass =
    style.accordionBtn + (isOpen ? " icon-up-open" : " icon-down-open");
  const bottomClass = `${style.bottom} ${isOpen ? style.isOpen : ""}`;

  return (
    <div className={style.lyricCard}>
      <div className={bottomClass}>
        <label htmlFor="unit">割り当て単位: </label>
        <Select defaultValue="シラブル" name="unit">
          <Option value="シラブル">シラブル</Option>
          <Option value="モーラ">モーラ</Option>
        </Select>
      </div>

      <div className={style.top}>
        <IconBtn iconName="icon-arrows-cw" size="medium" />
        <label className={style.label} htmlFor="numInput" >音数</label>
        <NumberInput defaultValue={3} max={20} min={1} />
        <TextInput defaultValue="hoge" />
        <label
          className={accordionBtnClass}
          htmlFor="accordion"
          onClick={toggle}
        >
          <input name="accordion" type="checkbox" />
        </label>
      </div>
    </div>
  );
};
