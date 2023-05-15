import React from "react";

const SongCard = ({
    song,
    currentArtist,
}) => {

    const { id,
        title,
        album_image_url,
        songArtist,
        collabArtists,
    } =  song;
    const albumId = song.album_id;

    const collabArtistNames = collabArtists.map(artist => {
        return <span key={`${artist.name}+"collab"+${artist.id}`}>{artist.name}, </span>
    })
    console.log("COLLABARTISTS", collabArtists)

    return (
        <div className="card album">
            <div className="album-card-art">
                <img src={album_image_url} alt="" />
            </div>
            <div className="card-title">
                {title}
            </div>
            <div className="card-subtitle">
                {collabArtistNames} {songArtist.name} • Song
            </div>
        </div>
    )
}

export default SongCard;