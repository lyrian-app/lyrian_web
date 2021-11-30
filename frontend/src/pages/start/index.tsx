import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchMarkovModel } from "../../api";
import { MarkovContext, ToasterContext } from "../../providers";
import { useBoolState } from "../../hooks";
import { MarkovState } from "../../hooks/markov";
import { Convert } from "../../utils/convert";

import { RectBtn, StrBtn } from "../../components/buttons";
import { Footer } from "../../components/footer";
import { Form, Textarea } from "../../components/form";
import { Main } from "../../components/layout";
import { Modal, ModalOverlay, ModalContent } from "../../components/modal";
import { Discription, H2, H3 } from "../../components/text";
import style from "./style.module.scss";

export const Start = () => {
  const [isOpen, toggleModal] = useBoolState(false);
  const [learningData, setText] = useState("");
  const jsonRef: React.RefObject<HTMLInputElement> = React.createRef();
  const navigate = useNavigate();
  const { mkvDispatch } = useContext(MarkovContext)!;
  const { bake } = useContext(ToasterContext)!;

  const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  const onSubmit = async () => {
    await fetchMarkovModel(learningData)
      .then((text) => {
        const model: MarkovState = JSON.parse(text);
        mkvDispatch({ type: "MarkovGeneratedMsg", model: model });
        navigate("/fix");
      })
      .catch((status) =>
        bake({
          type: "error",
          value: `サーバー通信時にエラーが発生しました。\nステータス: ${status}`,
        })
      );

    return false;
  };

  const readJson = () => {
    let fr = new FileReader();
    fr.addEventListener("load", (e) => {
      try {
        const model = Convert.toMarkovState(e.target?.result as string);
        mkvDispatch({ type: "MarkovGeneratedMsg", model: model });
        navigate("/fix");
      } catch (_) {
        bake({
          type: "error",
          value: "不正なファイル、または破損したファイルが入力されました。",
        });
      }
    });

    const target = jsonRef.current as HTMLInputElement;
    fr.readAsText(target.files![0]);
    toggleModal();
    return false;
  };

  return (
    <div className={style.start}>
      <Main>
        <H2>モデルの作成</H2>

        <Discription>
          Lyrianに学習させる文章を入力してください。
          <br />
          制作している楽曲の雰囲気に合わせた文章を入力することで、その雰囲気に近い歌詞を生成します。
        </Discription>

        <Form onSubmit={onSubmit}>
          <div className={style.textarea}>
            <Textarea
              placeholder="文章を入力してください。"
              value={learningData}
              onChange={onTextareaChange}
              required={true}
            />
          </div>

          <p className={style.notice}>
            ※ 使用する文章の著作権にご注意ください。
          </p>

          <div className={style.genModelBtn}>
            <RectBtn value="作成" size="large" type="submit" />
          </div>
        </Form>

        <StrBtn value="既にモデルをお持ちの方はこちら" onClick={toggleModal} />
      </Main>

      <Modal isOpen={isOpen}>
        <ModalOverlay onClick={toggleModal} />
        <ModalContent>
          <H3>モデルのインポート</H3>
          <Discription>作成したモデルファイルを選択してください。</Discription>
          <Form onSubmit={readJson}>
            <div className={style.fileInput}>
              <input type="file" accept=".json" ref={jsonRef} required={true} />
            </div>
            <RectBtn value="読み込み" size="medium" type="submit" />
          </Form>
        </ModalContent>
      </Modal>

      <Footer />
    </div>
  );
};
