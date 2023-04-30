import React from "react";
import AlbumCard from "./album_card";


const AlbumIndex = ({albums}) => {
    return <div className="album-index">
            <div className="album-index-header">
                <h2>
                    Albums
                </h2>
            </div>
            <div className="album-index-grid">
                {albums.map( album => (
                    // <li key={`${album.id}+${album.title}`}>
                    //     {album.title}
                    // </li>
                    <AlbumCard key={`${album.id}+${album.title}`} album={album} />
                ))}
            </div>
        </div>
}

export default AlbumIndex;