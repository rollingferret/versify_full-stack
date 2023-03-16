import React, { useEffect } from "react";
import PlaylistHeader from "./playlist_header";
import PlaylistNav from "./playlist_nav";
import PlaylistBody from "./playlist_body";
import { fetchPlaylists } from "../../actions/playlists_actions";


const PlaylistShow = ({ currentPlaylist,
    params,
    history,
    currentUser,
    playlistDropdownState,
    playlistModalState,
    displayPlaylist,
    fetchPlaylists,
    editPlaylist, 
    destroyPlaylist,
    clearCurrent,
    openPlaylistDropdown,
    closePlaylistDropdown,
    openPlaylistModal,
    closePlaylistModal,
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
    }, []);

    return (
        <div className="playlist-show">
            <div className="playlist-header">
                <PlaylistHeader title={title} description={description}
                    currentUser={currentUser} />
            </div>
            <div className="playlist-nav">
                <PlaylistNav currentPlaylist={currentPlaylist} 
                    playlistDropdownState={playlistDropdownState}
                    playlistModalState={playlistModalState}
                    openPlaylistDropdown={openPlaylistDropdown}
                    closePlaylistDropdown={closePlaylistDropdown}
                    fetchPlaylists={fetchPlaylists}
                    editPlaylist={editPlaylist}
                    destroyPlaylist={destroyPlaylist}
                    history={history}
                    openPlaylistModal={openPlaylistModal}
                    closePlaylistModal={closePlaylistModal}
                /> 
            </div>
            <div className="playlist-songs-index">
                {/* Just placeholding for PlaylistNav */}
                <PlaylistBody playlistedSongs={playlistedSongs}/>
            </div>
        </div>
    )
}

export default PlaylistShow;