import React from "react";

import {RxDotsHorizontal,
} from 'react-icons/rx';
import ArtistLinkContainer from "../artists/artist_link_container"; 

const SongCard = ({
    song,
    history
}) => {

    const { tracknum,
        title,
        albumId,
        mins,
        secs,
        songArtist,
        collabArtists,
        audioUrl,
    } = song;

    const collabArtistNames = collabArtists.map(artist => {
        return <div className="artist-name" key={`${artist.name}+"collab"+${artist.id}`}><ArtistLinkContainer artist={artist} currentArtist={null} history={history}/>, </div>
    })

    const songArtistName = <div className="artist-name" key={`${songArtist.name}+"track"+${songArtist.id}+${tracknum}`}><ArtistLinkContainer artist={songArtist} currentArtist={null} history={history}/></div>


    return ( 
        <div className="song-card">
            <div className="song-card-tracknum">
                {tracknum}
            </div>
            <div className="song-card-title-artist-block">
                <div className="song-card-title">
                    {title}
                </div>
                <div className="song-card-artist">
                    {collabArtistNames} {songArtistName}
                </div>
            </div>
            <div className="song-card-liked">
                &hearts;
            </div>
            <div className="song-card-duration">
                {mins}:{secs}
            </div>
            <div className="song-card-menu-dots">
                <RxDotsHorizontal />
            </div>
        </div>
    )
}

export default SongCard;