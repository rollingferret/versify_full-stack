import React, { useEffect } from "react";

import ArtistHeader from "./artist_header";
import AlbumIndex from "../albums/album_index";
import CollabSongIndex from "../songs/collab_song_index";

const ArtistShow = (
    {   currentArtist,
        albums,
        collabSongs,
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
        displayArtist(params.id);

        return () => clearCurrent();
    }, [params]); // Will run whenever params.id changes, otherwise ArtistShow doesn't re-render

    return (
        <div className="artist-show-background" style={{ backgroundImage: `url(${currentArtist.photo_url})`, backgroundSize: '50%' }}>
            <div className="artist-show" id="artist-show">
                <div className="artist-header">
                    <ArtistHeader currentArtist={currentArtist} />
                </div>
                <div className="artist-nav">

                </div>
                {/* <div className="song-index">
                </div> */}
                {albums.length > 0 ?
                    <AlbumIndex albums={albums} history={history} />
                    : null
                }
                {collabSongs.length > 0 ?
                    <CollabSongIndex songs={collabSongs} history={history} currentArtist={currentArtist}/>
                    : null
                }
            </div>
        </div>
    )
}

export default ArtistShow;