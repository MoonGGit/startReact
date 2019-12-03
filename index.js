import React from "react";
import ReactDOM from "react-dom";
// node_modules안의 모듈은 그냥, 그 외의 파일은 경로명시
// js파일은 확장자 생략가능
import {Root} from "./Profile";

ReactDOM.render(<Root />, document.getElementById("root"));