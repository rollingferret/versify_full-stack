import { PUSH_PLAY,
    PUSH_PAUSE,
} from "../actions/now_playing_actions";

const nowPlayingReducer = (playState={}, action) => {
    Object.freeze(playState);
    switch (action.type) {
		default:
			return playState;
	}
}

export default nowPlayingReducer;