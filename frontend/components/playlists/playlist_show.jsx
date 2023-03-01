import React, { useEffect } from "react";
import PlaylistHeader from "./playlist_header";
import PlaylistNav from "./playlist_nav";
import PlaylistBody from "./playlist_body";


const PlaylistShow = ({ playlistId, 
    displayPlaylist, 
    editPlaylist, 
    removePlaylist,
    clearCurrent, 
}) => {


// Upon mount: fetch playlist from database based on params :id
// Upon dismount: clear currentItem slice of state
    useEffect( () => {
        displayPlaylist(playlistId);

        return () => clearCurrent();
    }, []);
    
    return (
        <div className="playlist-show-container">
            <h1>This is PlaylistShow for PlaylistId #{playlistId}</h1>
            <PlaylistHeader />
            <PlaylistNav />
            <PlaylistBody />
        </div>

)}

export default PlaylistShow;