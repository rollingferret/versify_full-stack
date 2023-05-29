import React, { useEffect } from 'react';
import {CgClose,
} from 'react-icons/cg';
import PlaylistEditForm from './playlist_edit_form';

const PlaylistEditModal = ({
    playlistEditModalState,
    closePlaylistNavDropdown,
    closePlaylistEditModal,
    currentPlaylist,
    editPlaylist,
}) => {

    useEffect(() => {
        window.removeEventListener('click', closePlaylistNavDropdown);
        
        return () => {
            closePlaylistNavDropdown();
            closePlaylistEditModal();
        }
    },[])
    
    return (<>
        <div className="modal-background">
        
            <div className="modal-focus">
                <div className="modal-header">
                    <h3>Edit details</h3>
                    <CgClose onClick={closePlaylistEditModal}/>
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

export default PlaylistEditModal;