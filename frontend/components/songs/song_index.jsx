import React from "react";
import SongCard from "./song_card";


const SongIndex = ({
    songs,
    source,
    history,
}) => {

    return (
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
                    return <SongCard key={`${source} + ${song.id} + ${index}`} song={song} history={history} />
                }))
                : null
            }
        </div>
    )
}

export default SongIndex;