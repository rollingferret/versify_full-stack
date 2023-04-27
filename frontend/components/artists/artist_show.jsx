import React, { useEffect } from "react";
import { displayArtist } from "../../actions/artist_actions";

import ArtistHeader from "./artist_header";
import AlbumIndex from "../albums/album_index";

const ArtistShow = (
    {   currentArtist,
        albums,
        params,
        currentUser,
        history,
        displayArtist,
        clearCurrent,
    }
) => {

    useEffect( () => {
        displayArtist(params.id)

        return () => clearCurrent();
    }, [params]) // Will run whenever params.id changes

    
    return (
        <div className="artist-show-background" style={{ backgroundImage: `url(${currentArtist.photo_url})` }}>
            <div className="artist-show">
                <div className="artist-header">
                    <ArtistHeader currentArtist={currentArtist} />
                </div>
                <div className="artist-nav">

                </div>
                <div className="song-index">
                </div>
                <div className="album-index">
                    <AlbumIndex albums={albums} />
                </div>
            </div>
        </div>
    )
}

export default ArtistShow;