import { RECEIVE_CURRENT_ARTIST } from "../actions/artist_actions";
import { PLAY_ARTIST,
    PLAY_ALBUM,
    PLAY_PLAYLIST,
} from "../actions/now_playing_actions";

const nowPlayingReducer = (playState={isPlaying: false, trackIndex: 0, tracks:[], isShuffling: false}, action) => {
    Object.freeze(playState);
    let newPlayState = Object.assign({}, playState)
    switch (action.type) {
        case RECEIVE_CURRENT_ARTIST:
            newPlayState.tracks = [...action.allSongs];
            return newPlayState;
		// case RECEIVE_CURRENT_PLAYLIST:
        //     newPlayState.tracks = action.songs;
		// 	return newPlayState;
		// case PLAY_PLAYLIST:
        //     newPlayState.isPlaying = true;
		default:
			return playState;
	}
}

export default nowPlayingReducer;