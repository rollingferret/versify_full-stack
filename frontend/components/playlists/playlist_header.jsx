import React from "react";


const PlaylistHeader = ({ title, description, currentUser }) => {
    // console.log(currentUser)
    return (
        <>
            <div className="playlist-art">
            </div>
            <div className="playlist-header-text">
                <h2>Playlist</h2>
                <div id="title">
                    Title {title}
                </div>
                <h3>Description {description}</h3>
                <h2>Owner {currentUser.username}</h2>
            </div>
        </>
    )
}

export default PlaylistHeader;