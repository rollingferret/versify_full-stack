import React, { useEffect } from "react";
import PlaylistDropdown from "./playlist_dropdown";

import {RxDotsHorizontal,
} from 'react-icons/rx';
import {GrPlayFill,
} from 'react-icons/gr';


const PlaylistNav = ({currentPlaylist,
    playlistDropdownState,
    playlistModalState,
    openPlaylistDropdown,
    closePlaylistDropdown,
    openPlaylistModal,
    closePlaylistModal,
    fetchPlaylists,
    editPlaylist,
    destroyPlaylist,
    history,
}) => {

// UseEffect takes 2 args, a callback function and an array of dependencies that will trigger a re-render.
// setTimeout takes 2 args, an anonymous function and # of milliseconds.
// It turns the updating callback function into an async function which will wait until
// all the synchronous code has run before executing.
// (It will allow the Component to load before running the updating function again.
// Otherwise the eventListener will come on and then come off immediately.
    useEffect( () => {
        if (!playlistDropdownState.isOpen) window.removeEventListener('click', closePlaylistDropdown)
        }, [playlistDropdownState]
    )

    const togglePlaylistNavDropdown = (event) => {
        event.preventDefault();
        playlistDropdownState.isOpen ? closePlaylistDropdown() : openPlaylistDropdown();
    }

    return (
        <>
            <div id="playlist-play-button">
                <GrPlayFill />
            </div>
            <div id="playlist-dropdown-dots" onClick={togglePlaylistNavDropdown}>
                <RxDotsHorizontal />
            </div>
            {playlistDropdownState.isOpen ? 
                <PlaylistDropdown currentPlaylist={currentPlaylist} 
                    playlistDropdownState={playlistDropdownState}
                    playlistModalState={playlistModalState}
                    closePlaylistDropdown={closePlaylistDropdown}
                    openPlaylistModal={openPlaylistModal}
                    closePlaylistModal={closePlaylistModal}
                    fetchPlaylists={fetchPlaylists}
                    editPlaylist={editPlaylist} 
                    destroyPlaylist={destroyPlaylist}
                    history={history}/> 
                : null
            }
        </>
    )
}

export default PlaylistNav;