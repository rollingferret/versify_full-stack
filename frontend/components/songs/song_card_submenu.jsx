import React from "react";
import SongCardDropdownContainer from "./song_card_dropdown_container";


const SongCardSubmenu = ({
    submenus,
    submenuState,
    submenuRef,
    depthLevel,
    updateSongCardDropdownState,
}) => {

    depthLevel += 1;
    console.log("depthLevel in SongCardSubmenu", depthLevel)
    console.log("submenus in SongCardSubmenu", submenus)
    const dropdownClass = depthLevel > 0 ? "dropdown-submenu" : "";

    const keepParentMenuOpen = (e) => {
        e.stopPropagation();
    };

    return (
        <ul className={`song-card-dropdown ${dropdownClass} ${submenuState.isOpen ? "show" : ""}`}
            data-dropdown
            ref={submenuRef}
        >
            {submenus.map( (submenu, index) => {
                return <SongCardDropdownContainer 
                    key={`${index}+${depthLevel}+"subm"`}
                    items={submenu}
                    depthLevel={depthLevel}
                    updateSongCardDropdownState={updateSongCardDropdownState}
                />
            })}
        </ul>
    )




};

export default SongCardSubmenu;