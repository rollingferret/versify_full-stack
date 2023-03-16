import React, { useEffect } from "react";

const PlaylistDropdown = ({
    id,
    playlistDropdownState,
    closePlaylistDropdown,
    fetchPlaylists,
    editPlaylist,
    destroyPlaylist,
    history,
}) => {

    useEffect( () => {
        console.log('MOUNTED')
        setTimeout( () => {
            if (playlistDropdownState.isOpen) window.addEventListener('click', closePlaylistDropdown)
        }, 0)
        // if (playlistDropdownState.isOpen) window.addEventListener('click', closePlaylistDropdown);
        
        return () => {
            closePlaylistDropdown();
            window.removeEventListener('click', closePlaylistDropdown)
        }
    }, [])


    const keepDropdownOpen = (event) => {
        event.stopPropagation();
        // prevents re-rendering of parent and keeps menu open

        switch (event.target.innerText){
            case "Edit details":
                return console.log('OPEN EDIT MODAL')
            case "Delete":
                destroyPlaylist(id)
                    .then(fetchPlaylists())
                    // .then(closePlaylistDropdown())
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