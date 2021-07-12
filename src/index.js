import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // import를 이용해서 가져왔으면 컴포넌트를 추가할 때 파일 이름을 <>해줘야함

// <App />component를 사용할 때 형태
// 기본적으로 component라 부름 react는 component와 함께 동작
// 컴포넌트는 HTML을 반환하는 함수
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
