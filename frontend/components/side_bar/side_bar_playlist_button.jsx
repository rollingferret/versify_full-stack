import React from 'react';

const SideBarPlaylistButton = (props) => {
    const { title,
        displayPlaylist,
        playlistId,
    } = props;
    console.log('SideBarPlaylistButtonPROPS', props);

    // console.log(self);
    // const component = self;
    // const displayPlaylistBind = displayPlaylist.bind(component);

    const clickToShowPlaylist = (e) => {
        e.preventDefault();
        displayPlaylist(playlistId); 
    }
    return (
        <button 
            className="sidebar"
            onClick={clickToShowPlaylist}
        >
            <div className="text-playlist" > {title} </div>
        </button>
    )
}

export default SideBarPlaylistButton;