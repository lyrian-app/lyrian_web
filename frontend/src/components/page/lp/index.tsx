import React from "react";

export const LandingPage = () => {
  return (
    <div className="l-lp">
      <div className="l-top">
        <div className="title"></div>
        <div className="description"></div>
        <div className="start_btn"></div> {/* TODO: Create btn ui component */}
        <div className="down_arrow"></div>
      </div>
      <div className="l-what_is">
        <div className="description"></div>
        <div className="l-feature">
          <div className="feat box"></div>
          <div className="feat box"></div>
        </div>
      </div>
      <div className="l-usage">
        <div className="usage box"></div>
        <div className="usage box"></div>
        <div className="usage box"></div>
      </div>
      <div className="l-bottom">
        <div className="phrase"></div>
        <div className="start_btn"></div> {/* TODO: Create btn ui component */}
      </div>
      <footer className="l-footer">
        <div className="l-icon_btn">
          <div className="btn icon"></div>
          <div className="btn icon"></div>
        </div>
        <div className="links"></div>
        <div className="copyright"></div>
      </footer>
    </div>
  );
};
