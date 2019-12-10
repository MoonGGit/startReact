import styles from "./Test.css"
import React, {Component} from "react";
// must be listed before other Firebase SDKs
// firebase안의 모듈들을 개별로 가져올 것! 
// import * as firebase from "firebase/app";
const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

//require("firebase/auth");
//require("firebase/firestore");

/* 파이어베이스 프로젝트의 설정을 교체함
var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appID: "app-id",
};
firebase.initializeApp(firebaseConfig);

서버에서 가져올 땐 (예약된 URL사용)
<script src="/__/firebase/init.js"></script>
참고 : https://firebase.google.com/docs/hosting/reserved-urls?authuser=0

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.5.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.5.2/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>

초기화를 직접 제어 할 시 
fetch('/__/firebase/init.json').then(async response => {
  firebase.initializeApp(await response.json()); 
});
*/
// Your web app's Firebase configuration
const auth;
const database;

fireInit();

function authStateChanged(user){
    if (user) {
        console.log('user로그인 : ',JSON.stringify(user));
    } else {
        console.log('로그아웃')
    }
}

class GoogleAuthBtn extends Component {
    constructor(){
        super();
        this.state = {
            user: null,
            count: 0,
            message: `{this.state.count}번 클릭 됨`
        }
        this.handleClick = this.handleClick.bind(this);
    }
    getInitialState(){
        const firebaseConfig = {
            apiKey: "AIzaSyC2tkuXdbcwDod3LHijEGBuinMe9hEQ_SY",
            authDomain: "moong-memochat.firebaseapp.com",
            databaseURL: "https://moong-memochat.firebaseio.com",
            projectId: "moong-memochat",
            storageBucket: "moong-memochat.appspot.com",
            messagingSenderId: "729297622730",
            appId: "1:729297622730:web:e1174e5566cdfafc4b0633",
            measurementId: "G-EL42EY1J7Q"
            };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        auth = firegbase.auth();
        database = firebase.database();
        auth.onAuthStateChanged
        return {
            auth : auth,
            database : database
        };
    }
    handleClick(){
        this.setState({
            count: this.state.count + 1
        });
        
        // 인증 가즈아
        let googleProvider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(googleProvider).then(function(result) {
            console.log('로그인 성공')
        }).catch(function(error) {
            alert('로그인에 실패하였습니다');
            console.error('구글 로그인 과정 에러',error);
        });
    }
    render(){
        return (
            <div>
                <span>{this.state.count}</span>
                <Button className={styles.googleBtn} onClick={this.handleClick}>Google 인증</Button>
            </div>
        )
    }
  }

function getValue(){
    return value;
}

// export는 클래스, 객체로
// export default는 다 되는 듯
export {GoogleAuthBtn, getValue};

