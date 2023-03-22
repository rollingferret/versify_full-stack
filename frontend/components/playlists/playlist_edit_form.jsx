import React, { useState } from 'react';


// Consider writing as functional Component with React Hooks

const PlaylistEditForm = ({ currentPlaylist, editPlaylist }) => {
    
    const playlistId = currentPlaylist.id;
    const userId = currentPlaylist.user_id;
    const oldTitle = currentPlaylist.title;
    const oldDescription = currentPlaylist.description;
    
    // Set our local slices of State
    const [newTitle, setNewTitle] = useState(oldTitle);
    const [newDescription, setNewDescription] = useState(oldDescription);

    console.log('User ID', userId)

    // Submit button onClick action
    const handleSubmit = (e) => {
        e.preventDefault();
        const editedPlaylist = {
            title: newTitle,
            description: newDescription,
        }
        editPlaylist(editedPlaylist, playlistId);
    }

    return <>
        <h3> This is PlaylistEditForm</h3>
        <div className="playlist-art-edit"></div>

        <form className="edit-content">
            <label htmlFor="Playlist Title">
                <input type="text" 
                    id="Playlist Title" 
                    name="title" 
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                />
            </label>
            <br />
            <label htmlFor="Playlist Description">
                <input type="text" 
                    id="Playlist Description" 
                    name="description" 
                    value={newDescription}
                    onChange={e => setNewDescription(e.target.value)}
                />
            </label>
            <br />
            <input type="submit" value="Save" 
                onClick={handleSubmit}
            />
        </form>
    </>
}
export default PlaylistEditForm;