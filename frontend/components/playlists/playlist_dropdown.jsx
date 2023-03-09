import React from "React";

const PlaylistDropdown = (props) => {

    const keepDropdownOpen = (event) => {
        event.stopPropagation();
    }

    return (
        <div className="playlist-dropdown-item" onClick={keepDropdownOpen}>
            <button className="playlist-dropdown-button">Edit details</button>
            <button className="playlist-dropdown-button">Delete </button>
        </div>
    )
}

export default PlaylistDropdown;