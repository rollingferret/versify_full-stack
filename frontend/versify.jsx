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
import {
  postPlaylist,
  patchPlaylist,
  showPlaylist,
  indexPlaylists,
  deletePlaylist,
} from './util/playlists_util'

// const play = {title:'thisone',
// description: 'anew',
// user_id: 1}

// const edit = { title:'changednow',
// description: 'changepls',
// user_id: 1}

// TESTING END


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
      const preloadedState = {
        session: { id: window.currentUser.id },
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        }};
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    } 

  //TESTING
  window.store = store;
  window.postPlaylist = postPlaylist;
  window.patchPlaylist = patchPlaylist;
  window.showPlaylist = showPlaylist;
  window.indexPlaylists = indexPlaylists;
  window.deletePlaylist = deletePlaylist;
  //TESTING
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
