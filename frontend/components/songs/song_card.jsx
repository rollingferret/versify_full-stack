import React, { useEffect, useRef } from "react";

import {RxDotsHorizontal,
} from 'react-icons/rx';
import ArtistLinkContainer from "../artists/artist_link_container"; 

const SongCard = ({
    source,
    song,
    history,
    index,
    songCardDropdownState,
    updateSongCardDropdownState,
    updateSelectedSong,
    dropdownMenuPointer,
    updateDropdownMenuPointer,
}) => {

    const {
        id,
        title,
        albumId,
        album,
        mins,
        secs,
        playlistedId,
        songArtist,
        collabArtists,
        audioUrl,
    } = song;

    let tracknum = (source === "album") ? song.tracknum : index+1;

    const collabArtistNames = collabArtists.map(artist => {
        return <div className="artist-name" key={`${artist.name}+"collab"+${artist.id}`}>
            <ArtistLinkContainer 
                artist={artist} 
                currentArtist={null} 
                history={history}
            />,&nbsp;
        </div>
    })

    const songArtistName = <div className="artist-name" 
        key={`${songArtist.name}+"track"+${songArtist.id}+${tracknum}`}>
            <ArtistLinkContainer 
                artist={songArtist} 
                currentArtist={null} 
                history={history}
            />
        </div>

    // Setting up SongCardDropdown functionality per SongCard
    const placeSongCardDropdown = (e) => {
        const result = e.target.getBoundingClientRect();
        console.log(result)
    }

    const toggleSongCardDropdown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!songCardDropdownState.isOpen) {
            updateSongCardDropdownState( {isOpen: true} );
        } else if (dropdownMenuPointer === index) {
            updateSongCardDropdownState( !songCardDropdownState.isOpen );
        } else if (songCardDropdownState.isOpen && dropdownMenuPointer !== index) {
            placeSongCardDropdown(e);
        };
        updateDropdownMenuPointer(index);
        updateSelectedSong(song);
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
                    {collabArtistNames}{songArtistName}
                </div>
            </div>
            {source === "playlist" ? (
                <div className="song-card-album">
                    {album}
                </div>
                ) : null
            }
            <div className="song-card-liked">
                &hearts;
            </div>
            <div className="song-card-duration">
                {mins}:{secs}
            </div>
            <div className="song-card-menu-dots" 
                onClick={toggleSongCardDropdown}
            >
                <RxDotsHorizontal />
            </div>
        </div>
    )
}

export default SongCard;