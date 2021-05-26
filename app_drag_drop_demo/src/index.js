import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
//import AppDragDropDemo from './components/AppDragDropDemo/AppDragDropDemo';
//import CustomToast from './components/CustomToast/CustomToast';
//import ExpandableLayout from './components/ExpandableLayout/ExpandableLayout';
import reportWebVitals from './reportWebVitals';
// import EditPage from './components/EditPage/EditPage';
import GameSpaceTab from "./components/GameSpaceTab/GameSpaceTab";
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

ReactDOM.render
(
  <React.StrictMode>
    <Provider store={store}>
      <GameSpaceTab />
    </ Provider>
  </React.StrictMode>,
   document.getElementById
   (
     "root"
    )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
