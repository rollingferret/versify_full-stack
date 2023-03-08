const playlistEditModalReducer = (playlistModalState = {}, action) => {
    Object.freeze(playlistModalState);
    switch (action.type) {
        default:
            return playlistModalState;
    }
}

export default playlistEditModalReducer;