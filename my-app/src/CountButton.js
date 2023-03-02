import "./CountButton.css";
import React, { useState, useEffect } from "react";
import logo, { ReactComponent as Logo } from "./logo.svg";
// console.log(Logo);

// 함수 선언문

export function CountButton() {
  const [count, setCount] = useState(9);

  // useEffect [side Effects] 할때 사용한다.
  // console.log(count);

  useEffect(() => {
    const reactLogo = document.querySelector("img");
    console.log(reactLogo);
  }, []);

  return (
    <button
      onClick={() => {
        console.log(
          "사용자가 버튼을 클릭하면 count 상태를 업데이트 해주세요!! React Pz"
        );
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
}
