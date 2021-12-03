import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { StrBtn } from "../../components/buttons";
import { Main } from "../../components/layout";
import { Discription, H2 } from "../../components/text";
import {
  MountStatus,
  Transition,
  TRANSITION_TIME,
} from "../../components/transition";

export const NotFound = () => {
  const [status, setStatus] = useState<MountStatus>("willMount");
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "willMount") setStatus("mounted");
  }, [status]);

  const onClick = () => {
    setStatus("willUnmount");
    setTimeout(() => navigate("/"), TRANSITION_TIME, false);
  };

  return (
    <Transition status={status}>
      <Main>
        <H2>404 - Page not found.</H2>
        <Discription>お探しのページは見つかりませんでした。</Discription>
        <StrBtn size="medium" onClick={onClick}>
          <i className="icon-left-circled" /> ホームに戻る
        </StrBtn>
      </Main>
    </Transition>
  );
};
