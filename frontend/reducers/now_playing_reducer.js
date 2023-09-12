import { QUEUE_ALBUM } from "../actions/now_playing_actions";
import { TOGGLE_PLAY } from "../actions/now_playing_actions";

const nowPlayingReducer = (
	playState = { isPlaying: false, queue: [] },
	action
) => {
	Object.freeze(playState);
	let newPlayState = Object.assign({}, playState);
	switch (action.type) {
		case TOGGLE_PLAY:
			if (newPlayState.queue?.length > 0)
				newPlayState.isPlaying = !newPlayState.isPlaying;
			return newPlayState;
		case QUEUE_ALBUM: // payload is an array of song objects
			newPlayState.queue.push(...action.songs);
		default:
			return playState;
	}
};

export default nowPlayingReducer;
