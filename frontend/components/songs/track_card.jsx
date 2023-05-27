import React from "react";
import ArtistLinkContainer from "../artists/artist_link_container"; 

const TrackCard = ( {track} ) => {

    const { tracknum,
        title,
        albumId,
        mins,
        secs,
        songArtist,
        collabArtists,
        audioUrl,
    } = track;

    const collabArtistNames = collabArtists.map(artist => {
        return <div className="artist-name" key={`${artist.name}+"collab"+${artist.id}`}><ArtistLinkContainer artist={artist} currentArtist={null} history={history}/>, </div>
    })

    const songArtistName = <ArtistLinkContainer artist={songArtist} currentArtist={null} history={history}/>


    return ( 
        <div className="track-card">
            <div className="track-card-tracknum">
                {tracknum}
            </div>
            <div className="track-card-title-artist-block">
                <div className="track-card-title">
                    {title}
                </div>
                <div className="track-card-artist">
                    {collabArtistNames} {songArtistName}
                </div>
            </div>
            <div className="track-card-liked">
                &hearts;
            </div>
            <div className="track-card-duration">
                {mins}:{secs}
            </div>
        </div>
    )
}

export default TrackCard;