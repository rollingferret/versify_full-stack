import React, { useEffect } from "react";

import ArtistHeader from "./artist_header";
import AlbumIndex from "../albums/album_index";

const ArtistShow = (
    {   currentArtist,
        albums,
        params,
        currentUser,
        history,
        path,
        displayArtist,
        clearCurrent,
    }
) => {
    console.log("PARAMS",params)
    console.log("ALBUMS", albums)
    
    useEffect( () => {
        displayArtist(params.id)

        return () => clearCurrent();
    }, [params, path]) // Will run whenever params.id changes

    return (
        <div className="artist-show-background" style={{ backgroundImage: `url(${currentArtist.photo_url})`, backgroundSize: '50%' }}>
            <div className="artist-show">
                <div className="artist-header">
                    <ArtistHeader currentArtist={currentArtist} />
                </div>
                <div className="artist-nav">

                </div>
                {/* <div className="song-index">
                </div> */}
                {albums.length > 0 ?
                    <AlbumIndex albums={albums} />
                    : null
                }
            </div>
        </div>
    )
}

export default ArtistShow;