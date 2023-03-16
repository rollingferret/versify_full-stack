import React from 'react';

const PlaylistModal = (props) => {
    console.log('HIT PLAYLIST MODAL')
    
    return (<>
        <div className="modal-background">
        </div>
        <div className="modal-focus">
            <h3>Edit details</h3>
            <form className="edit-content">
                <div className="playlist-art-edit"></div>
                <input type="text" name="title" id="" />
                <input type="text" name="description" id="" />
                <input type="submit" value="Save" />
            </form>

        </div>

    
    </>)


}

export default PlaylistModal;