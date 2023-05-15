import React from "react";
import ArtistLinkContainer from "../artists/artist_link_container";

const SongCard = ({
    song,
    currentArtist,
    history,
}) => {

    const { id,
        title,
        album_image_url,
        songArtist,
        collabArtists,
    } =  song;
    const albumId = song.album_id;

    const collabArtistNames = collabArtists.map(artist => {
        return <div className="artist-name" key={`${artist.name}+"collab"+${artist.id}`}><ArtistLinkContainer artist={artist} currentArtist={currentArtist} history={history}/>, </div>
    })

    const songArtistName = <ArtistLinkContainer artist={songArtist} currentArtist={currentArtist} history={history}/>

    return (
        <div className="card album">
            <div className="album-card-art">
                <img src={album_image_url} alt="" />
            </div>
            <div className="card-title">
                {title}
            </div>
            <div className="card-subtitle">
                {collabArtistNames} {songArtistName} • Song
            </div>
        </div>
    )
}

export default SongCard;