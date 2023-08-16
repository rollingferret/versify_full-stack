import { RECEIVE_CURRENT_ARTIST } from "../actions/artist_actions";
import { TOGGLE_PLAY,
    PLAY_ARTIST,
    PLAY_ALBUM,
    PLAY_PLAYLIST,
} from "../actions/now_playing_actions";

const nowPlayingReducer = (playState={isPlaying: false, trackIndex: 0, queue:[], isShuffling: false}, action) => {
    Object.freeze(playState);
    let newPlayState = Object.assign({}, playState)
    switch (action.type) {
        case RECEIVE_CURRENT_ARTIST:
            newPlayState.queue = [...action.allSongs];
            return newPlayState;
        case TOGGLE_PLAY:
            debugger
            if (newPlayState.queue?.length > 0) newPlayState.isPlaying = !newPlayState.isPlaying;
            return newPlayState;
		// case RECEIVE_CURRENT_PLAYLIST:
        //     newPlayState.queue = action.songs;
		// 	return newPlayState;
		// case PLAY_PLAYLIST:
        //     newPlayState.isPlaying = true;
		default:
			return playState;
	}
}

export default nowPlayingReducer;