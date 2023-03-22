import React from 'react';


// Consider writing as functional Component with React Hooks

const PlaylistEditForm = ({
    currentPlaylist,
    editPlaylist,
}) => {
    
    const playlistId = currentPlaylist.id;
    const userId = currentPlaylist.user_id;
    const { title, description } = currentPlaylist;

    console.log('User ID', userId)

    return <>
        <h3> This is PlaylistEditForm</h3>
        <div className="playlist-art-edit"></div>
        <form className="edit-content">
            <input type="text" name="title" id="" />
            <input type="text" name="description" id="" />
            <input type="submit" value="Save" />
        </form>
    </>
}
export default PlaylistEditForm;