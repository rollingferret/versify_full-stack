import React from "react";
import CollabCard from "./collab_card";

const CollabSongIndex = ({
    songs,
    history,
    displayAlbum,
    currentArtist,
}) => {

    return <div className="album-index">
    <div className="album-index-header">
        <h2>
            Featuring {currentArtist.name}
        </h2>
    </div>
    <div className="album-index-grid">
        {songs.map( song => (
            <CollabCard
                key={`${song.id}+${song.title}`}
                song={song}
                history={history}
                displayAlbum={displayAlbum}
                currentArtist={currentArtist}
            />
        ))}
    </div>
</div>
}

export default CollabSongIndex;