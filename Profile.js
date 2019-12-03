import React from "react";
import styles from "./Test.css"

// export 사용 시 import { Root }
// export default 사용 시 import Root 
export const Root = ()=>{
    return (
        <div className={styles.red}>test MoonG</div>
    );
};