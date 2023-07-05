import React from "react";
import { useState, useEffect, useRef } from "react";
import SongCard from "./song_card";
import SongCardDropdownContainer from "./song_card_dropdown_container";


const SongIndex = ({
    playlists,
    songs,
    history,
    params,
    source,
    songCardDropdownItems,
}) => {
    
    // Set local states for SongCardDropdownState and selectedSong
    const [songCardDropdownState, setSongCardDropdownState] = useState({ isOpen: false });
    const [selectedSong, setSelectedSong] = useState(null);
    // Set local state to remember which SongCard was clicked
    const [dropdownMenuPointer, setDropdownMenuPointer] = useState(null);
    
    // Updater functions for local states
    const updateSongCardDropdownState = (newState) => {
        setSongCardDropdownState(newState);
    };
    const updateSelectedSong = (newState) => {
        setSelectedSong(newState);
    };
    const updateDropdownMenuPointer = (newState) => {
        setDropdownMenuPointer(newState);
    };
    
    // Dropdowns must be closed and null selectedSong when SongIndex is first rendered
    useEffect( () => {
        setSongCardDropdownState({ isOpen: false })
        return () => {
            setSelectedSong(null);
            setSongCardDropdownState({ isOpen: false });
        }
    }, [params]);

    const songIndex = (
        <div className={`song-index`+" " +source}>
            <div className="song-index-headings">
                <div className="song-index-heading-tracknum">
                    #
                </div>
                <div className="song-index-heading-title">
                    Title
                </div>
                {source === "playlist" ? (
                    <div className="song-index-heading-album">
                        Album
                    </div>
                    ) : null
                }
                <div className="song-index-heading-liked">
                    &#128153;
                </div>
                <div className="song-index-heading-duration">
                    &#9201;
                </div>
                <div className="song-index-heading-menu">
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
                        dropdownMenuPointer={dropdownMenuPointer}
                        placeSongCardDropdown={placeSongCardDropdown}
                        updateSongCardDropdownState={updateSongCardDropdownState}
                        updateSelectedSong={updateSelectedSong}
                        updateDropdownMenuPointer={updateDropdownMenuPointer}
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

    // Relocate SongCardDropdown depending on location of SongCard
    const {clickLocation, setClickLocation} = useState({x: 0, y: 0});
    const {dropdownPosition, setDropdownPosition} = useState({x: 0, y: 0});

    // Updater functions for local states
    const updateClickLocation = (newState) => {
        setClickLocation(newState);
    };
    const updateDropdownPosition = (newState) => {
        setDropdownPosition(newState);
    };

    const placeSongCardDropdown = (e) => {
        // const clickLocation = e.target.getBoundingClientRect();
        // const dropdownRect = document.getElementById('song-card-dropdown');
        // setDropdownPosition({x: clickLocation.x, y: clickLocation.y});
        // if (dropdownPosition.x > clickLocation.x){
        //     setDropdownPosition({x: (dropdownPosition.x -= clickLocation.x), y: dropdownPosition.y});
        // }
        console.log("PLACED")
    }

    const depthLevel = 0;
    return <>
        {songs.length > 0 ? songIndex : emptyPlaylist}
        {songCardDropdownState.isOpen && <SongCardDropdownContainer 
                source={source} 
                selectedSong={selectedSong}
                songCardDropdownState={songCardDropdownState}
                updateSongCardDropdownState={updateSongCardDropdownState}
                updateClickLocation={updateClickLocation}
                updateDropdownPosition={updateDropdownPosition}
                items={songCardDropdownItems}
                depthLevel={depthLevel}
            />
        }
    </>
}

export default SongIndex;