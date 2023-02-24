import "./CountButton.css";
import React, { useState } from "react";

// 함수 선언문

export function CountButton() {
  const [count, setCount] = useState(9);
  console.log(count);
  return (
    <button
      onDoubleClick={() => {
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
