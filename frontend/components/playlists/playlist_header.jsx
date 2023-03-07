import React from "react";


const PlaylistHeader = ({ title, description, currentUser }) => {
    // console.log(currentUser)
    return (
        <>
            <div className="playlist-art">
            </div>
            <div className="playlist-header-text">
                <div id="type">
                    <h2>Playlist</h2>
                </div>
                <div id="title">
                    {title}
                </div>
                <div id="description">
                    <h3>Description {description}</h3>
                    <h2>{currentUser.username}</h2>
                </div>
            </div>
        </>
    )
}

export default PlaylistHeader;