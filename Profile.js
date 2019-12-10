import React from "react";
import styles from "./Test.css";
import scss from "./TestScss.scss";
import * as fire from "./fire"

// export 사용 시 import { Root } 
// 또는 import * as app from '../lib/Util'
// export default 사용 시 import Root 

/* 
test.js
module.exports.test = testFunc;     // testFunc는 함수로 가정
module.exports.myModule = myModuleFunc;     // myModuleFunc도 함수로 가정
    // module.exports와 exports는 동일
    
main.js
var mod = require('./test');
mod.test();
*/
export const Root = ()=>{
    return (
        <div className={styles.red}>
            <fire.GoogleAuthBtn />
            <span className={scss.title}>테스트 value : {fire.getValue}</span>
        </div>
    );
};

