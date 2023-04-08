import React, { useEffect } from "react";
import ArtistCard from './artist_card'

const ArtistIndex = ({
    artists,
    params,
    history,
    path,
    fetchArtists,
    displayArtist,
}) => {
    
    useEffect( () => {
        fetchArtists();
    }, [])

    console.log(artists)

    return (
        artists.length === 0 ?
            null

            :
            <div>
                <div className="artist-index-header">
                    <h1>All Artists</h1>
                </div>
                <div className="artist-index-grid">
                    {artists.map(artist => (
                        <ArtistCard artist={artist}/>
                    ))}
                </div>
            </div>
    )
}

export default ArtistIndex;