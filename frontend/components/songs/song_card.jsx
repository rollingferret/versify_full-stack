import React from "react";
import SongCardDropdown from "./song_card_dropdown";

import {RxDotsHorizontal,
} from 'react-icons/rx';
import ArtistLinkContainer from "../artists/artist_link_container"; 

const SongCard = ({
    source,
    song,
    history,
    index,
    songCardDropdownState,
    openSongCardDropdown,
}) => {

    const { id,
        title,
        albumId,
        mins,
        secs,
        songArtist,
        collabArtists,
        audioUrl,
    } = song;

    let tracknum = (source === "album") ? song.tracknum : index+1;

    const collabArtistNames = collabArtists.map(artist => {
        return <div className="artist-name" key={`${artist.name}+"collab"+${artist.id}`}><ArtistLinkContainer artist={artist} currentArtist={null} history={history}/>, </div>
    })

    const songArtistName = <div className="artist-name" key={`${songArtist.name}+"track"+${songArtist.id}+${tracknum}`}><ArtistLinkContainer artist={songArtist} currentArtist={null} history={history}/></div>

    const toggleSongCardDropdown = (event) => {
        event.preventDefault();
        songCardDropdownState.isOpen ? null : openSongCardDropdown();
    }

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
            <div className="song-card-menu-dots" onClick= {toggleSongCardDropdown}>
                <RxDotsHorizontal />
            </div>
            <SongCardDropdown 
                source={source} 
                songId={id} 
                history={history} 
                songCardDropdownState={songCardDropdownState}/>
        </div>
    )
}

export default SongCard;