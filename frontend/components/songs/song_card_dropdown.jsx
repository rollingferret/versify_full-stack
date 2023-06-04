import React from "react";


const SongCardDropdown = ({ 
    source,
    songId,
    history,
    songCardDropdownState,
 }) => {



    return songCardDropdownState.isOpen ? 
        <div className="song-card-dropdown">
            THIS IS TRACK CARD DROPDOWN
        </div>
        : null

}

export default SongCardDropdown