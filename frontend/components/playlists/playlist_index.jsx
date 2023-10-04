import React, { useEffect } from "react";

import SidebarPlaylistButton from '../sidebar/sidebar_playlist_button'


// PlaylistIndex is simple enough to convert to functional component
const PlaylistIndex = (props) => {

    const { fetchPlaylists,
        displayPlaylist,
        playlists,
        currentPlaylist,
        currentUsername,
        path,
        history,
    } = props;

    useEffect( () => {
        fetchPlaylists();
    }, [path]);

    return (
        playlists.length === 0 ?
            <div className="playlist-index-empty">
                You currently have no playlists.
            </div>
            :
            <div className="playlist-index">
                {playlists.map((playlist) => (
                    <SidebarPlaylistButton key={`${playlist.id} + ${playlist.title}`} title={playlist.title} playlistId={playlist.id} displayPlaylist={displayPlaylist} history={history} />))
                }
            </div>
    )
}

export default PlaylistIndex;