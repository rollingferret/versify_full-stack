import React from "react";


const AlbumIndex = ({albums}) => {
    console.log(albums)
    return <>
        THIS IS ALBUM INDEX.
        <div className="album-index">
            {albums.map( album => (
                <li key={`${album.id}+${album.title}`}>
                    {album.title}
                </li>
            ))}
        </div>
    </>
}

export default AlbumIndex;