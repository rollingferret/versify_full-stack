import React, { useState, useEffect, useRef } from "react";

import SongCardSubmenu from "./song_card_submenu";
import SongCardDropdownItem from "./song_card_dropdown_item";


const SongCardDropdown = ({
    currentItem,
    playlists,
    source,
    selectedSong,
    updateSongCardDropdownState,
    items,
    depthLevel,
    removePlaylisted,
    createNewPlaylisted,
    displayPlaylist,
 }) => {

    // Set local state for SongCardSubmenu
    let dropdownRef = useRef();
    const [submenuState, setSubmenuState] = useState({ isOpen: false });

    // Add event listeners when menu is open; remove when menu is closed
    useEffect(() => {
        const handler = (event) => {
            if (submenuState.isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                updateSongCardDropdownState({ isOpen: false });
                setSubmenuState({ isOpen: false });
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener when component unmounts
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [submenuState]);
    
    let x;
    let y;
    const toggleSubmenu = (e) => {
        e.preventDefault();
        const result = e.target.getBoundingClientRect();
        x= result.x;
        y= result.y;
        console.log(result);
        setSubmenuState({ isOpen: !submenuState.isOpen });
        console.log(x, y)
    };

    return (
        <div className="song-card-dropdown" data-dropdown ref={dropdownRef}>
            {items.map((item, index) =>
                item.submenu ? (
                    // If a submenu exists, create button for submenu title and pass submenu to SongCardSubmenu
                    <>
                        <button
                            className="song-card-dropdown-item"
                            key={`${selectedSong.playlistedId}+${depthLevel}+${item.title}+"btn"`}
                            onClick={toggleSubmenu}
                        >
                            {item.title}{" "}
                            <span
                                key={`${selectedSong.playlistedId}`}
                            >
                                &raquo;
                            </span>
                        </button>
                        <SongCardSubmenu
                            key={`${selectedSong.playlistedId}+${depthLevel}+${item.title}+"subm"`}
                            source={source}
                            selectedSong={selectedSong}
                            submenus={item.submenu}
                            submenuState={submenuState}
                            depthLevel={depthLevel}
                            updateSongCardDropdownState={updateSongCardDropdownState}
                        />
                    </>
                ) : (<SongCardDropdownItem // Else, create just a button
                        key={`${selectedSong.playlistedId}+${item.title}+${depthLevel}+"no-subm"`}
                        currentItem={currentItem}
                        playlists={playlists}
                        source={source}
                        item={item}
                        index={index}
                        depthLevel={depthLevel}
                        selectedSong={selectedSong}
                        removePlaylisted={removePlaylisted}
                        createNewPlaylisted={createNewPlaylisted}
                        updateSongCardDropdownState={updateSongCardDropdownState}
                        displayPlaylist={displayPlaylist}
                    />
                )
            )}
        </div>
    );
}

export default SongCardDropdown;