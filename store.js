import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from 'firebase';

//Firebaseの設定
var config = {
  apiKey: "AIzaSyBzVyx_37_1xJj1UCiQH4xMOZGEYdPFzhM",
  authDomain: "sue-react.firebaseapp.com",
  databaseURL: "https://sue-react-default-rtdb.firebaseio.com",
  projectId: "sue-react",
  storageBucket: "sue-react.appspot.com",
  messagingSenderId: "240951514920",
  appId: "1:240951514920:web:5ec1312a42bb4a76c3a21d",
  measurementId: "G-33XWHTJXSL"
};

// Firebase初期化
var fireapp;
try {
  fireapp = firebase.initializeApp(config);
} catch (error) {
  console.log(error.message);
}
export default fireapp;


// ステート初期値
const initial = {
  login:false,
  username:'(click here!)',
  email:'',
  data:[],
  items:[]
}


// レデューサー
function fireReducer(state = intitial, action) {
  switch (action.type) {
    // ダミー
    case 'UPDATE_USER':
      return action.value;
    // デフォルト
    default:
      return state;
  }
}


// initStore関数
export function initStore(state = initial) {
  return createStore(fireReducer, state,
    applyMiddleware(thunkMiddleware))
}
