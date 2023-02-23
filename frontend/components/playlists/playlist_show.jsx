import React, { useEffect } from "react";
import PlaylistHeader from "./playlist_header";
import PlaylistNav from "./playlist_nav";
import PlaylistBody from "./playlist_body";


const PlaylistShow = (props) => {
    debugger;
    console.log('PLAYLISTSHOW PROPS', props);

    const playlistId = props.match.params.id;
    const { displayPlaylist,
    } = props;

    useEffect( () => {
        displayPlaylist(playlistId);
    });
    
    return (
        <div className="playlist-show-container">
            <h1>This is PlaylistShow for PlaylistId #${playlistId}</h1>
            <PlaylistHeader />
            <PlaylistNav />
            <PlaylistBody />
        </div>

)}

export default PlaylistShow;