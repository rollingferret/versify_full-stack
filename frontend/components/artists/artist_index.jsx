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

    const artistMap = artists ? (
        artists.map(artist => (
            <ArtistCard key={`${artist.name + 'ind'}`} artist={artist} urlParams={params} 
                history={history} displayArtist={displayArtist}/>
        ))    
        ) : null;

    const artistIndex = artists ? (
        <div>
            <div className="artist-index-header">
                <h1>All Artists</h1>
            </div>
            <div className="artist-index-grid">
                {artistMap}
            </div>
        </div>
        ) : null;

    return artistMap ? artistIndex : null;
}

export default ArtistIndex;