import React, { useState, useEffect, useRef } from "react";

import MenuItems from "./song_card_dropdown_item1";


const SongCardDropdown = ({
    source,
    songId,
    history,
    updateSongCardDropdownState,
    items,
    depthLevel,
 }) => {

    let ref = useRef();
    const [submenuState, setSubmenuState] = useState({ isOpen: false });

    useEffect(() => {
        const handler = (event) => {
         if (submenuState && ref.current && !ref.current.contains(event.target)) {
            setSubmenuState({ isOpen: false });
        }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
        // Cleanup the event listener
        // updateSongCardDropdownState({ isOpen: false });
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [submenuState]);

    
    // let { x, y };
    const handleClick = (e) => {
        e.preventDefault();
        const result = e.target.getBoundingClientRect();
        console.log(result);
        setSubmenuState({ isOpen: !submenuState.isOpen });
    };

    console.log("submenuState", submenuState)
    console.log("depthLevel in SongCardDropdown", depthLevel)
    console.log("ITEMS in dropdown", items)
    return (
        <div className="song-card-dropdown" data-dropdown ref={ref}> 
            {items.map( (item, index) => (
                item.submenu ? (
                    // If a submenu exists, create button for submenu title and pass submenu to MenuItems
                    <> 
                        <button className="song-card-dropdown-item"
                            key={`${index}+${item.title}+"subm"`}
                            onClick={handleClick}
                        >
                            {item.title}{' '}
                            {/* {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />} */}
                            <span>&raquo;</span>
                        </button>
                        <MenuItems
                            key={`${index}+"subm"+${depthLevel}`}
                            submenus={item.submenu}
                            submenuState={submenuState}
                            depthLevel={depthLevel}
                            updateSongCardDropdownState={updateSongCardDropdownState}
                        />
                    </>
                ) : ( // Else, create just a button
                    <>
                        <button className="song-card-dropdown-item"
                            key={`${index}+${item.title}+"no-subm"`}
                            type="button"
                            onClick={handleClick}
                        >
                            {item.title}{' '}
                        </button>
                    </>)
                )
            )}
        </div>
    )
}

export default SongCardDropdown