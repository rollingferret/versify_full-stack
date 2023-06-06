import React from "react";
import { useState, useEffect } from "react";
import SongCard from "./song_card";
import SongCardDropdownContainer from "./song_card_dropdown_container";


const SongIndex = ({
    source,
    playlists,
    songs,
    history,
    params,
}) => {
    
    const [songCardDropdownState, setSongCardDropdownState] = useState({ isOpen: false });
    const [selectedSongId, setSelectedSongId] = useState(null);
    const [playlistedId, setPlaylistedId] = useState(null);
    
    const updateSongCardDropdownState = (newState) => {
        setSongCardDropdownState(newState);
    };
    const updateSelectedSongId = (newState) => {
        setSelectedSongId(newState);
    };
    const updatePlaylistedId = (newState) => {
        setPlaylistedId(newState);
    };
    
    useEffect( () => {
        return () => {
            updateSelectedSongId(null);
            updateSongCardDropdownState({ isOpen: false });
        }
    }, [params]);

    let songCardDropdownItems;
    if (source === "playlist") {
        songCardDropdownItems = [
            {
                title: "Remove from this playlist"
            }, 
            {
                title: "Add to playlist",
                submenu: [playlists],
            },
        ]
    } else if (source === "album") {
        songCardDropdownItems = [
            {
                title: "Add to playlist",
                submenu: [playlists], 
                // Enclose in array since dropdown uses recursive .map function
            }
        ]
    };
    console.log("DROPDOWN ITEMS", songCardDropdownItems)
    console.log(songCardDropdownState)
    const songIndex = (
        <div className={`song-index` + " " + source}>
            <div className="song-index-headings">
                <div className="song-index-heading-tracknum">
                    #
                </div>
                <div className="song-index-heading-title">
                    Title
                </div>
                <div className="song-index-heading-liked">
                    &#128153;
                </div>
                <div className="song-index-heading-duration">
                    &#9201;
                </div>
            </div>
            {songs.length > 0 ? 
                (songs.map( (song, index) => {
                    return <SongCard
                        key={`${source} + ${song.id} + ${index}`} 
                        source={source}
                        song={song}
                        history={history}
                        index={index}
                        songCardDropdownState={songCardDropdownState}
                        updateSongCardDropdownState={updateSongCardDropdownState}
                        updateSelectedSongId={updateSelectedSongId}
                        updatePlaylistedId={updatePlaylistedId}
                    />
                }))
                : null
            }
        </div>    
    )

    const emptyPlaylist = (
        <div className="song-index song-index-empty">
            <h3>Add some songs to your playlist!</h3>
        </div>
    )

    const depthLevel = 0;
    return <>
        {songs.length > 0 ? songIndex : emptyPlaylist};
        {songCardDropdownState.isOpen && <SongCardDropdownContainer 
                source={source} 
                songId={selectedSongId} 
                history={history}
                updateSongCardDropdownState={updateSongCardDropdownState}
                songCardDropdownState={songCardDropdownState}
                items={songCardDropdownItems}
                depthLevel={depthLevel}
            />
        }
    </>
}

export default SongIndex;