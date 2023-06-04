import React from "react";
import { useState, useEffect } from "react";
import SongCard from "./song_card";
import SongCardDropdown from "./song_card_dropdown";


const SongIndex = ({
    source,
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
    const updateselectedSongId = (newState) => {
        setSelectedSongId(newState);
    };
    const updatePlaylistedId = (newState) => {
        setPlaylistedId(newState);
    };
    
    useEffect( () => {
        return () => {
            updateselectedSongId(null);
            updateSongCardDropdownState({ isOpen: false });
        }
    }, [params]);

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
                        updateselectedSongId={updateselectedSongId}
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

    return <>
        {songs.length > 0 ? songIndex : emptyPlaylist};
        {songCardDropdownState.isOpen && <SongCardDropdown 
                source={source} 
                songId={selectedSongId} 
                history={history}
                songCardDropdownState={songCardDropdownState}
            />
        }
    </>
}

export default SongIndex;