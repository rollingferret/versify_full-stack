import React, { useEffect } from "react";
import PlaylistHeader from "./playlist_header";
import PlaylistNav from "./playlist_nav";
import PlaylistBody from "./playlist_body";


const PlaylistShow = ({ currentPlaylist,
    params,
    displayPlaylist,
    editPlaylist, 
    removePlaylist,
    clearCurrent,
    currentUser,
}) => {

    const { id, 
        title,
        description,
    } = currentPlaylist;
    console.log(currentPlaylist);
    const playlistSongs = 'PLACEHOLDER FOR SONGS INDEX'


// Upon mount: fetch playlist from database based on params :id
// Upon dismount: clear currentItem slice of state
    useEffect( () => {
        displayPlaylist(params.id); 
        // Maybe there's a way to check whether the params.id has changed from the previous and then trigger re-render

        return () => clearCurrent();
    }, []);

    // return (
    //     <div className="playlist-show">
    //         <h1>{title} {description} ID:{id} {playlistSongs} </h1>
    //     </div>
    // )
    return (
        <div className="playlist-show">
            <div className="playlist-header">
                <PlaylistHeader title={title} description={description}
                    currentUser={currentUser} />
            </div>
            <div className="playlist-nav">
                <PlaylistNav id={id}/> 
            </div>
            <div className="playlist-songs-index">
                {/* Just placeholding for PlaylistNav */}
                <PlaylistBody playlistSongs={playlistSongs}/>
            </div>
        </div>
    )
}

export default PlaylistShow;