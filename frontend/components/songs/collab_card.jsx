import React from "react";
import ArtistLinkContainer from "../artists/artist_link_container";

const CollabSongCard = ({
    song,
    history,
    displayAlbum,
    currentArtist,
}) => {

    const { id,
        title,
        albumId,
        albumImageUrl,
        songArtist,
        collabArtists,
    } =  song;

    const collabArtistNames = collabArtists.map(artist => {
        return <div className="artist-name" key={`${artist.name}+"collab"+${artist.id}`}><ArtistLinkContainer artist={artist} currentArtist={currentArtist} history={history}/>, </div>
    })

    const songArtistName = <ArtistLinkContainer artist={songArtist} currentArtist={currentArtist} history={history}/>

    const handleClick = (e) => {
        e.preventDefault();
        displayAlbum(albumId);
        return history.push(`/album/${albumId}`)
    }

    return (
        <div className="card album-card">
            <div className="album-card-art"
                onClick={handleClick}
            >
                <img src={albumImageUrl} alt="" />
            </div>
            <div className="card-title"
                onClick={handleClick}
            >
                {title}
            </div>
            <div className="card-subtitle">
                {collabArtistNames} {songArtistName} • Song
            </div>
        </div>
    )
}

export default CollabSongCard;