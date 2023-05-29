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

    const artistIndex = artists ? (
        <div>
            <div className="artist-index-header">
                <h1>All Artists</h1>
            </div>
            <div className="artist-index-grid">
                {artists.map(artist => (
                    <ArtistCard key={`${artist.name + 'ind'}`} artist={artist} urlParams={params} 
                        history={history} displayArtist={displayArtist}/>
                ))}
            </div>
        </div>
    ) : null;

    if (artists.length > 0) {
        if (artists[artists.length-1].photoUrl) {
            return artistIndex;
        }
    } else {
        return null;
    }   
}

export default ArtistIndex;