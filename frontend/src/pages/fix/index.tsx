import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Token } from "../../hooks";
import { MarkovContext } from "../../providers";
import { stringToParts } from "../../utils/convert";
import { getUnknownTokenIdxs } from "./utils";

import { RectBtn } from "../../components/buttons";
import { Footer } from "../../components/footer";
import { Form, TokenCard } from "../../components/form";
import { Main } from "../../components/layout";
import { Discription, H2 } from "../../components/text";
import style from "./style.module.scss";

export const Fix = () => {
  const { markov, dispatch } = useContext(MarkovContext)!;
  const navigate = useNavigate();

  const idxes = getUnknownTokenIdxs(markov);
  const [moras, setMoras] = React.useState(
    Array<string>(idxes.length).fill("")
  );
  const [syllables, setSyllables] = React.useState(
    Array<string>(idxes.length).fill("")
  );
  const [parts, setParts] = React.useState(
    Array<string>(idxes.length).fill("名詞")
  );

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
    try {
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
        dispatch({
          type: "TokenUpdatedMsg",
          index: summary.tokenIndex,
          token: summary.token,
        })
      );
      navigate("/edit");
    } catch (e) {
      alert(`エラーが発生しました。\n${e}`);
    } finally {
      return false;
    }
  };

  return (
    <div className={style.fix}>
      <Main>
        <H2>言葉の読み方を教えてください。</H2>
        <Discription>
          読みや発音、品詞が不明な単語が見つかりました。
          <br />
          以下の例に従って情報を追記してください。
          <br />
          例：大空 → 読み「オオゾラ」、発音「オーゾラ」、品詞「名詞」
        </Discription>

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

      <Footer />
    </div>
  );
};
