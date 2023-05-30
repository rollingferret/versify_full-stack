import React, { useEffect } from "react";
import PlaylistHeader from "./playlist_header";
import PlaylistNav from "./playlist_nav";
import PlaylistBody from "./playlist_body";


const PlaylistShow = ({ 
    currentPlaylist,
    params,
    history,
    currentUser,
    songs,
    playlistNavDropdownState,
    playlistEditModalState,
    displayPlaylist,
    fetchPlaylists,
    editPlaylist, 
    destroyPlaylist,
    clearCurrent,
    openPlaylistNavDropdown,
    closePlaylistNavDropdown,
    openPlaylistEditModal,
    closePlaylistEditModal,
}) => {

    const { id, 
        title,
        description,
    } = currentPlaylist;
    const playlistedSongs = 'PLACEHOLDER FOR SONGS INDEX from state, see container'

// Upon mount: fetch playlist from database based on params :id
// Upon dismount: clear currentItem slice of state
    useEffect( () => {
        displayPlaylist(params.id); 
        // Maybe there's a way to check whether the params.id has changed from the previous and then trigger re-render

        return () => clearCurrent();
    }, [params]);

    return (
        <div className="playlist-show">
            <div className="playlist-header">
                <PlaylistHeader title={title} description={description}
                    currentUser={currentUser} />
            </div>
            <div className="playlist-nav">
                <PlaylistNav currentPlaylist={currentPlaylist} 
                    playlistNavDropdownState={playlistNavDropdownState}
                    playlistEditModalState={playlistEditModalState}
                    openPlaylistNavDropdown={openPlaylistNavDropdown}
                    closePlaylistNavDropdown={closePlaylistNavDropdown}
                    fetchPlaylists={fetchPlaylists}
                    editPlaylist={editPlaylist}
                    destroyPlaylist={destroyPlaylist}
                    history={history}
                    openPlaylistEditModal={openPlaylistEditModal}
                    closePlaylistEditModal={closePlaylistEditModal}
                /> 
            </div>
            {/* <div className="song-index">
                <PlaylistBody playlistedSongs={playlistedSongs}/>
            </div> */}
        </div>
    )
}

export default PlaylistShow;