import React, { useEffect } from "react";
import PlaylistModal from "./playlist_modal";

const PlaylistDropdown = ({
    currentPlaylist,
    playlistDropdownState,
    playlistModalState,
    closePlaylistDropdown,
    openPlaylistModal,
    closePlaylistModal,
    fetchPlaylists,
    editPlaylist,
    destroyPlaylist,
    history,
}) => {

    useEffect( () => {
        setTimeout( () => {
            if (playlistDropdownState.isOpen && !playlistModalState.isOpen) {
                window.addEventListener('click', closePlaylistDropdown);
            } 
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
                openPlaylistModal();
                return console.log('OPEN EDIT MODAL');
            case "Delete":
                destroyPlaylist(currentPlaylist.id)
                    .then(fetchPlaylists())
                return history.push('/home')
            default: null;
        }
    }

    return (
        <>
            <div className="playlist-dropdown-item" onClick={keepDropdownOpen}>
                <button className="playlist-dropdown-button">Edit details</button>
                <button className="playlist-dropdown-button">Delete </button>
            </div>
            {playlistModalState.isOpen && <PlaylistModal
                playlistModalState={playlistModalState}
                closePlaylistDropdown={closePlaylistDropdown}
                closePlaylistModal={closePlaylistModal}
                currentPlaylist={currentPlaylist}
                editPlaylist={editPlaylist}
            />}
        </>
    )
}

export default PlaylistDropdown;