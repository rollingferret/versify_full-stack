import React from "react";

const SidebarPlaylistButton = (props) => {
    const { title, playlistId, history, displayPlaylist } = props;

    const clickToShowPlaylist = (e) => {
        e.preventDefault();
        displayPlaylist(playlistId);
        history.push(`/playlist/${playlistId}`);
    };
    return (
        <button className="sidebar" onClick={clickToShowPlaylist}>
            <div className="text-playlist"> {title} </div>
        </button>
    );
};

export default SidebarPlaylistButton;
