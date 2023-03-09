import React from "React";

const PlaylistDropdown = ({
    id,
    editPlaylist,
    destroyPlaylist,
    history,
}) => {

    const keepDropdownOpen = (event) => {
        event.stopPropagation();
        //prevents re-rendering of parent and keeps menu open

        switch (event.target.innerText){
            case "Edit details":
                return console.log('OPEN EDIT MODAL')
            case "Delete":
                destroyPlaylist(id)
                .then
                return history.push('/home')
            default: null;
        }
    }

    return (
        <div className="playlist-dropdown-item" onClick={keepDropdownOpen}>
            <button className="playlist-dropdown-button">Edit details</button>
            <button className="playlist-dropdown-button">Delete </button>
        </div>
    )
}

export default PlaylistDropdown;