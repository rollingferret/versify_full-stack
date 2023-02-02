import React, { useEffect } from "react";

import SideBarPlaylistButton from '../side_bar/side_bar_playlist_button'


// PlaylistIndex is simple enough to convert to functional component
const PlaylistIndex = (props) => {

    console.log('INDEX PROPS', props)

    const { fetchPlaylists,
        displayPlaylist,
        playlists,
        currentUsername,
        history,
    } = props;

    useEffect( () => {
        fetchPlaylists();
    }, []);

    return (
        playlists.length === 0 ?

        <div className="playlist-index-container-empty">
            You currently have no playlists.
        </div>
        
        :
        <div className="playlist-index-container">
            {playlists.map((playlist) => (
                <SideBarPlaylistButton key={`${playlist.id} + ${playlist.title}`} title={playlist.title} playlistId={playlist.id} displayPlaylist={displayPlaylist} history={history} />))
            }
        </div>
    )
}

export default PlaylistIndex;