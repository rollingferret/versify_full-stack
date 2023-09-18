export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const PUSH_PLAY = "PUSH_PLAY";
export const QUEUE_ARTIST = "QUEUE_ARTIST";
export const PLAY_ARTIST = "PLAY_ARTIST";

const togglePlay = () => ({
	type: TOGGLE_PLAY,
});

const pushPlay = () => ({
	type: PUSH_PLAY,
});

const queueArtist = (queueObj) => ({
	//{allSongs:arr, sourceType:str, extractedUrlParams:numStr}
	type: QUEUE_ARTIST,
	allSongs: queueObj.allSongs,
	sourceType: queueObj.sourceType,
	extractedUrlParams: queueObj.extractedUrlParams,
});

const playArtist = (queueObj) => ({
	//{allSongs:arr, sourceType:str, extractedUrlParams:numStr}
	type: PLAY_ARTIST,
	allSongs: queueObj.allSongs,
	sourceType: queueObj.sourceType,
	extractedUrlParams: queueObj.extractedUrlParams,
});

export const toTogglePlay = () => (dispatch) => dispatch(togglePlay());

export const toQueueArtist = (queueObj) => (dispatch) => {
	return dispatch(queueArtist(queueObj));
};

export const toPlayArtist = (queueObj) => (dispatch) => {
	return dispatch(playArtist(queueObj));
};

export const toPushPlay = () => (dispatch) => dispatch(pushPlay())