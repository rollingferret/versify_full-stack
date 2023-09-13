export const TOGGLE_PLAY = 'TOGGLE_PLAY'
export const QUEUE_ARTIST = 'QUEUE_ARTIST'

const togglePlay = () => ({
    type: TOGGLE_PLAY,
})

const queueSong = () => ({
    type: QUEUE_SONG,
})

const queueArtist = (queueObj) => ({
	//{allSongs:arr, sourceType:str, extractedUrlParams:numStr}
	type: QUEUE_ARTIST,
	allSongs: queueObj.allSongs,
	sourceType: queueObj.sourceType,
	extractedUrlParams: queueObj.extractedUrlParams,
});

export const reduxPlay = () => dispatch => (
    dispatch(togglePlay())
);

export const toQueueArtist = (queueObj) => dispatch => {
    return dispatch(queueArtist(queueObj));
}