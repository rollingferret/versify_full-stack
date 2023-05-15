import React from "react";
import SongCard from "./song_card";

const CollabSongIndex = ({
    songs,
    currentArtist,
}) => {
    console.log("SONGS", songs)
    return <div className="album-index">
    <div className="album-index-header">
        <h2>
            Featuring {currentArtist.name}
        </h2>
    </div>
    <div className="album-index-grid">
        {songs.map( song => (
            <SongCard key={`${song.id}+${song.title}`} song={song} currentArtist={currentArtist} />
        ))}
    </div>
</div>
}

export default CollabSongIndex;