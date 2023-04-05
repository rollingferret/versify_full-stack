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
        <div className="artist-index-grid">
        </div>

        :
        <div className="artist-index-grid">
            All Artists List
            {artists.map(artist => (
                <ArtistCard artist={artist}/>
            ))}
        </div>
    )
}

export default ArtistIndex;