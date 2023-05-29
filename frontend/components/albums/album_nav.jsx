import React from "react";

import {RxDotsHorizontal,
} from 'react-icons/rx';
import {GrPlayFill,
} from 'react-icons/gr';

const AlbumNav = ({ props }) => {

    // const toggleAlbumNavDropdown = (event) => {
    //     event.preventDefault();
    //     playlistDropdownState.isOpen ? closePlaylistDropdown() : openPlaylistDropdown();
    // }

    return (
        <>
            <div id="playlist-play-button">
                <GrPlayFill />
            </div>
            <div id="playlist-dropdown-dots">
                <RxDotsHorizontal />
            </div>
        </>
    )

}

export default AlbumNav;