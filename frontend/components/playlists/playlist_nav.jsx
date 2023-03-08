import React from "react";

import {RxDotsHorizontal,
} from 'react-icons/rx';
import {GrPlayFill,
} from 'react-icons/gr';


const PlaylistNav = ({ id }) => {

    return (
        <>
            <div id="playlist-play-button">
                <GrPlayFill />
            </div>
            <div id="playlist-dropdown">
                <RxDotsHorizontal />
            </div>
        </>
    )
}

export default PlaylistNav;