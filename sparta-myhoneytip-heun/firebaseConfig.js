import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/compat/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/compat/storage";

// Initialize Firebase
// 파이어베이스 사이트에서 봤던 연결정보를 여기에 가져온다.
const firebaseConfig = {
  apiKey: "AIzaSyBSrdSkAbXz3IGFOGhv0DSsWOZGgmX3Amc",
  authDomain: "sparta-myhoneytip-9c029.firebaseapp.com",
  databaseURL: "https://sparta-myhoneytip-9c029-default-rtdb.firebaseio.com/",
  projectId: "sparta-myhoneytip-9c029",
  storageBucket: "sparta-myhoneytip-9c029.appspot.com",
  messagingSenderId: "369357463079",
  appId: "1:369357463079:web:36dbf8d916932dfa2c7802",
  measurementId: "G-C1FQT06GJB",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database();
