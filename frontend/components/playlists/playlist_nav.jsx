import React, { useMemo } from "react";
import PlaylistDropdown from "./playlist_dropdown";

import {RxDotsHorizontal,
} from 'react-icons/rx';
import {GrPlayFill,
} from 'react-icons/gr';


const PlaylistNav = ({id,
    playlistDropdown,
    openPlaylistDropdown,
    closePlaylistDropdown,
}) => {

    const toggleDropdown = (event) => {
        event.preventDefault();
        console.log(event);
        playlistDropdown.isOpen ? closePlaylistDropdown() : openPlaylistDropdown();
    }

    return (
        <>
            <div id="playlist-play-button">
                <GrPlayFill />
            </div>
            <div id="playlist-dropdown-dots" onClick={toggleDropdown}>
            {/* <div id="playlist-dropdown-dots"> */}
                <RxDotsHorizontal />
            </div>
            {playlistDropdown.isOpen ? <PlaylistDropdown /> : null}
        </>
    )
}

export default PlaylistNav;