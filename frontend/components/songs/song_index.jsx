import React from "react";
import SongCard from "./song_card";


const SongIndex = ({
    source,
    songs,
    history,
    songCardDropdownState,
    openSongCardDropdown,
    closeSongCardDropdown,
}) => {
    console.log("SONG INDEX", songCardDropdownState)
    const songIndex = (
        <div className={`song-index` + " " + source}>
            <div className="song-index-headings">
                <div className="song-index-heading-tracknum">
                    #
                </div>
                <div className="song-index-heading-title">
                    Title
                </div>
                <div className="song-index-heading-liked">
                    &#128153;
                </div>
                <div className="song-index-heading-duration">
                    &#9201;
                </div>
            </div>
            {songs.length > 0 ? 
                (songs.map( (song, index) => {
                    return <SongCard key={`${source} + ${song.id} + ${index}`} 
                        source={source}
                        song={song}
                        history={history}
                        index={index}
                        songCardDropdownState={songCardDropdownState}
                        openSongCardDropdown={openSongCardDropdown}
                        closeSongCardDropdown={closeSongCardDropdown}/>
                }))
                : null
            }
        </div>    
    )

    const emptyPlaylist = (
        <div className="song-index song-index-empty">
            <h3>Add some songs to your playlist!</h3>
        </div>
    )

    return songs.length > 0 ? songIndex : emptyPlaylist;
}

export default SongIndex;