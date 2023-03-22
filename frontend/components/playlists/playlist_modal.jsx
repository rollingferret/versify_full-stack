import React, { useEffect } from 'react';
import {CgClose,
} from 'react-icons/cg';
import PlaylistEditForm from './playlist_edit_form';

const PlaylistModal = ({
    playlistModalState,
    closePlaylistDropdown,
    closePlaylistModal,
    currentPlaylist,
    editPlaylist,
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
                <div className="modal-header">
                    <h3>Edit details</h3>
                    <CgClose onClick={closePlaylistModal}/>
                </div>
                <div className="modal-body">
                    <PlaylistEditForm currentPlaylist={currentPlaylist}
                        editPlaylist={editPlaylist}
                    />
                </div>
            </div>
        </div>
    
    </>)


}

export default PlaylistModal;