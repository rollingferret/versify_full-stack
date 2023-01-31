import React, { useEffect } from "react";
import PlaylistHeader from "./playlist_header";
import PlaylistNav from "./playlist_nav";
import PlaylistBody from "./playlist_body";
import { displayPlaylist } from "../../actions/playlists_actions";


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
        <div>
            This is PlaylistShow for PlaylistId #`${playlistId}`
            <PlaylistHeader />
            <PlaylistNav />
            <PlaylistBody />
        </div>

)}

export default PlaylistShow;