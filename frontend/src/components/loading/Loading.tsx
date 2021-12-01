import React from "react";

import { TRANSITION_TIME } from "../transition";
import style from "./loading.module.scss";

interface LoadingProps {
  isLoading: boolean;
}

export const Loading = ({ isLoading }: LoadingProps) => {
  const loading = `${style.loading} ${isLoading ? style.isLoading : ""}`;
  const loadingStyle = { transition: `${TRANSITION_TIME / 1000}s` };

  return (
    <div className={loading} style={loadingStyle}>
      <div className={style.animation}>
        <div className={style.circle1} />
        <div className={style.circle2} />
      </div>
    </div>
  );
};
