import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';

// TESTING START

import {
  postPlaylistedSong,
  deletePlaylistedSong,
  indexPlaylistedSongs,
} from './util/playlisted_songs_util';

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
  window.postPlaylistedSong = postPlaylistedSong;
  window.deletePlaylistedSong = deletePlaylistedSong;
  window.indexPlaylistedSongs = indexPlaylistedSongs;


  //TESTING
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
