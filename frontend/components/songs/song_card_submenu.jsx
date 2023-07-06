import React from "react";
import SongCardDropdownContainer from "./song_card_dropdown_container";


const SongCardSubmenu = ({
    source,
    currentUser,
    selectedSong,
    submenus,
    submenuState,
    depthLevel,
    dropdownPosition,
    updateSongCardDropdownState,
}) => {

    depthLevel += 1;
    const dropdownClass = depthLevel > 0 ? "dropdown-submenu" : "";

    return (
        <ul className={`song-card-dropdown ${dropdownClass} ${submenuState.isOpen ? "show" : ""}`}
            data-dropdown
        >
            {submenus.map( (submenu, index) => {
                return <SongCardDropdownContainer 
                    key={`${index}+${depthLevel}+"subm"`}
                    source={source}
                    currentUser={currentUser}
                    selectedSong={selectedSong}
                    items={submenu}
                    depthLevel={depthLevel}
                    dropdownPosition={dropdownPosition}
                    updateSongCardDropdownState={updateSongCardDropdownState}
                />
            })}
        </ul>
    )




};

export default SongCardSubmenu;