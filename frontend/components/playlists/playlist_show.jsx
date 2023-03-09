import React, { useEffect } from "react";
import PlaylistHeader from "./playlist_header";
import PlaylistNav from "./playlist_nav";
import PlaylistBody from "./playlist_body";


const PlaylistShow = ({ currentPlaylist,
    params,
    playlistDropdown,
    displayPlaylist,
    editPlaylist, 
    removePlaylist,
    openPlaylistDropdown,
    closePlaylistDropdown,
    clearCurrent,
    currentUser,
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
                <PlaylistNav id={id} 
                    playlistDropdown={playlistDropdown}
                    openPlaylistDropdown={openPlaylistDropdown}
                    closePlaylistDropdown={closePlaylistDropdown}
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