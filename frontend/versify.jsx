import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';

// TESTING START
import {
  postUser,
  postSession,
  deleteSession,
} from './util/session_util'
// TESTING END


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

    // TESTING START
    window.postUser = postUser,
    window.postSession = postSession,
    window.deleteSession = deleteSession,
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TESTING END  

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
