import React, { useEffect } from "react";
import PlaylistNavDropdown from "./playlist_nav_dropdown";

import { RxDotsHorizontal } from "react-icons/rx";
import { GrPlayFill } from "react-icons/gr";

const PlaylistNav = ({
    currentPlaylist,
    history,
    playlistNavDropdownState,
    playlistEditModalState,
    fetchPlaylists,
    editPlaylist,
    destroyPlaylist,
    openPlaylistNavDropdown,
    closePlaylistNavDropdown,
    openPlaylistEditModal,
    closePlaylistEditModal,
}) => {
    useEffect(() => {
    // UseEffect takes 2 args, a callback function and an array of dependencies 
    // that will trigger a re-render.
    // setTimeout takes 2 args, an anonymous function and # of milliseconds.
    // It turns the updating callback function into an async function which will 
    // wait until all the synchronous code has run before executing.
    // It will allow the Component to load before running updater function again.
    // Otherwise the eventListener will come on and then come off immediately.
        if (!playlistNavDropdownState.isOpen)
            window.removeEventListener("click", closePlaylistNavDropdown);
    }, [playlistNavDropdownState]);

    const togglePlaylistNavDropdown = (event) => {
        event.preventDefault();
        playlistNavDropdownState.isOpen
            ? closePlaylistNavDropdown()
            : openPlaylistNavDropdown();
    };

    return (
        <>
            <div id="playlist-play-button">
                <GrPlayFill />
            </div>
            <div
                id="playlist-dropdown-dots"
                onClick={togglePlaylistNavDropdown}
            >
                <RxDotsHorizontal />
            </div>
            {playlistNavDropdownState.isOpen ? (
                <PlaylistNavDropdown
                    currentPlaylist={currentPlaylist}
                    playlistNavDropdownState={playlistNavDropdownState}
                    playlistEditModalState={playlistEditModalState}
                    closePlaylistNavDropdown={closePlaylistNavDropdown}
                    openPlaylistEditModal={openPlaylistEditModal}
                    closePlaylistEditModal={closePlaylistEditModal}
                    fetchPlaylists={fetchPlaylists}
                    editPlaylist={editPlaylist}
                    destroyPlaylist={destroyPlaylist}
                    history={history}
                />
            ) : null}
        </>
    );
};

export default PlaylistNav;
