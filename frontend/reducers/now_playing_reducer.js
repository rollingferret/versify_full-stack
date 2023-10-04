import { QUEUE_ARTIST, PLAY_ARTIST, PUSH_PLAY } from "../actions/now_playing_actions";
import { TOGGLE_PLAY } from "../actions/now_playing_actions";

const nowPlayingReducer = (
	playState = {
		isPlaying: false,
		queue: [],
		queueSource: { sourceType: null, extractedUrlParams: null },
	},
	action
) => {
	Object.freeze(playState);
	let newPlayState = Object.assign({}, playState);
	switch (action.type) {
		case TOGGLE_PLAY:
			if (newPlayState.queue?.length > 0)
				newPlayState.isPlaying = !newPlayState.isPlaying;
			return newPlayState;
		case PUSH_PLAY:
			if (newPlayState.queue?.length > 0) newPlayState.isPlaying = true;
			return newPlayState;
		case QUEUE_ARTIST:
			newPlayState.queue.push(...action.allSongs);
			// mutate the object so the player does not stop playing to re-render
			newPlayState.queueSource = {
				sourceType: action.sourceType,
				extractedUrlParams: action.extractedUrlParams,
			};
			// TODO: Add code for queue to track multiple queueSources
			// for each series of songs added
			// TODO: Consider separate key to hold current track
			// to continue playback for when user clears the queue
			console.log("NEW QUEUE", newPlayState.queue);
			return newPlayState;
		case PLAY_ARTIST:
			newPlayState.queue = action.allSongs;
			// replace the entire queue
			newPlayState.queueSource = {
				sourceType: action.sourceType,
				extractedUrlParams: action.extractedUrlParams,
			};
			console.log("NEW QUEUE", newPlayState.queue);
			return newPlayState;
		default:
			return playState;
	}
};

export default nowPlayingReducer;
