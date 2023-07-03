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
        displayAlbum,
        clearCurrent,
    }
) => {
    
    useEffect( () => {
        displayArtist(params.id);

        const rendered = document.getElementById("artist-show");
        rendered ? rendered.scrollTo(0, 0) : null;

        return () => {
            clearCurrent();
        }
    }, [params]); // Will run whenever params.id changes, otherwise ArtistShow doesn't re-render

    const artistShow = (
        <div className="artist-show-background" style={{ backgroundImage: `url(${currentArtist.photoUrl})`, backgroundSize: '50%' }}>
            <div className="artist-show" id="artist-show">
                <div className="artist-header">
                    <ArtistHeader currentArtist={currentArtist} />
                </div>
                <div className="artist-nav">

                </div>
                {/* <div className="song-index">
                </div> */}
                {albums.length > 0 ?
                    <AlbumIndex
                        albums={albums}
                        history={history}
                        displayAlbum={displayAlbum}
                    />
                    : null
                }
                {collabSongs.length > 0 ?
                    <CollabSongIndex 
                        songs={collabSongs}
                        history={history}
                        displayAlbum={displayAlbum}
                        currentArtist={currentArtist}
                    />
                    : null
                }
            </div>
        </div>
    )

    return currentArtist.photoUrl ? artistShow : null
}

export default ArtistShow;