import React, { useEffect } from "react";
import PlaylistDropdown from "./playlist_dropdown";

import {RxDotsHorizontal,
} from 'react-icons/rx';
import {GrPlayFill,
} from 'react-icons/gr';


const PlaylistNav = ({id,
    playlistDropdown,
    openPlaylistDropdown,
    closePlaylistDropdown,
    editPlaylist,
    removePlaylist,
}) => {

// UseEffect takes 2 args, a callback function and an array of dependencies that will trigger a re-render.
// setTimeout takes 2 args, an anonymous function and # of milliseconds.
// It turns the updating callback function into an async function which will wait until
// all the synchronous code has run before executing.
// (It will allow the Component to load before running the updating function again.
// Otherwise the eventListener will come on and then come off immediately.
    useEffect( () => {
        setTimeout( () => 
            {playlistDropdown.isOpen ? 
                window.addEventListener('click', closePlaylistDropdown)
                : window.removeEventListener('click', closePlaylistDropdown)
        }, 0)
    }, [playlistDropdown])


    const toggleDropdown = (event) => {
        event.preventDefault();
        playlistDropdown.isOpen ? closePlaylistDropdown() : openPlaylistDropdown();
    }

    return (
        <>
            <div id="playlist-play-button">
                <GrPlayFill />
            </div>
            <div id="playlist-dropdown-dots" onClick={toggleDropdown}>
                <RxDotsHorizontal />
            </div>
            {playlistDropdown.isOpen ? 
                <PlaylistDropdown id={id} 
                    editPlaylist={editPlaylist} 
                    removePlaylist={removePlaylist}/> 
                : null}
        </>
    )
}

export default PlaylistNav;