import { RECEIVE_CURRENT_ARTIST } from "../actions/artist_actions";
import { TOGGLE_PLAY } from "../actions/now_playing_actions";

const nowPlayingReducer = (
	playState = { isPlaying: false, queue: [] },
	action
) => {
	Object.freeze(playState);
	let newPlayState = Object.assign({}, playState);
	switch (action.type) {
		case RECEIVE_CURRENT_ARTIST:
			newPlayState.queue = [...action.allSongs];
			return newPlayState;
		case TOGGLE_PLAY:
			if (newPlayState.queue?.length > 0)
				newPlayState.isPlaying = !newPlayState.isPlaying;
			return newPlayState;
		default:
			return playState;
	}
};

export default nowPlayingReducer;
