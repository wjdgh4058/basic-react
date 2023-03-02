import { useState } from "react";
import classes from "./ChangeBackground.module.css";

export function ChangeBackground() {
  const [bgColorState, setBgColorState] = useState("yellow");

  return (
    <div className={classes.ChangeBackground}>
      <input
        type="color"
        title="취향 색상 선택"
        aria-label="취향 색상 선택"
        onChange={(e) => {
          // console.log(e.target.value);
          setBgColorState(e.target.value);
        }}
      />
      <div
        className={classes.box}
        style={{
          background: bgColorState,
        }}
      >
        {bgColorState}
      </div>
    </div>
  );
}
