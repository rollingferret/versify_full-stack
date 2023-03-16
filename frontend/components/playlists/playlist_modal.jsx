import React, { useEffect } from 'react';
import {CgClose,
} from 'react-icons/cg';

const PlaylistModal = ({
    playlistModalState,
    closePlaylistDropdown,
    closePlaylistModal,
    currentPlaylist,
}) => {

    useEffect(() => {
        window.removeEventListener('click', closePlaylistDropdown);
        
        return () => {
            closePlaylistDropdown();
            closePlaylistModal();
        }
    },[])
    
    return (<>
        <div className="modal-background">
        
            <div className="modal-focus">
                <h3>Edit details
                    id: {currentPlaylist.id}
                    title: {currentPlaylist.title}
                    description: {currentPlaylist.description}
                </h3>
                <CgClose onClick={closePlaylistModal}/>
                <form className="edit-content">
                    <div className="playlist-art-edit"></div>
                    <input type="text" name="title" id="" />
                    <input type="text" name="description" id="" />
                    <input type="submit" value="Save" />
                </form>

            </div>
        </div>
    
    </>)


}

export default PlaylistModal;