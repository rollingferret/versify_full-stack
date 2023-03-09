import React, { useMemo } from 'react'

import {AiFillHome,
} from 'react-icons/ai';
import {FaSearch,
} from 'react-icons/fa';
import {MdOutlineAddBox,
} from 'react-icons/md';

import PlaylistIndexContainer from '../playlists/playlist_index_container';
import SideBarNavButton from './side_bar_nav_button'

const SideBar = (props) => {
    // console.log('SIDEBAR PROPS', props);

    const { createPlaylist,
        displayPlaylist,
        fetchPlaylists,
        playlists,
        history,
        currentUser,
        errors,
    } = props

    const playlistIndexRender = useMemo( () => <PlaylistIndexContainer 
        currentUser={currentUser} history={history}
        />, [playlists]
    )

    // const handleDropdown = useMemo( () => <PlaylistDropdown 
    // playlistDropdown={playlistDropdown} />, [playlistDropdown] )

    const handleSubmitCreate = (e) => {
        e.preventDefault();

        const number = playlists.length;

        const defaultNewPlaylist = { 
            title: `Untitled Playlist #${number}`,
            description: 'Please add a description',
            user_id: currentUser.id,
        }

        return createPlaylist(defaultNewPlaylist)
        .then( () => fetchPlaylists(currentUser.id))
        .then( (actionObj) => history.push(`/playlist/${actionObj.playlists[0].id}`) )
    }

    return (
        <section className='sidebar-container'>
            <nav className="sidebar">
                <SideBarNavButton history={history} 
                    text='Home' 
                    icon={<AiFillHome />} 
                    url='home' 
                />
                {/* <SideBarNavButton history={history} text='Search' icon={<FaSearch />} url='search' /> */}
                <button className="sidebar-nav"
                    name='playlist'
                    onClick={handleSubmitCreate}>
                        <div className="icon" ><MdOutlineAddBox /></div>
                        <div className="text-button" >Create Playlist</div>
                </button>
            </nav>

            <div className="line"></div>
            {playlistIndexRender}
                {/* Only re-render Playlist#Index of the playlists slice of state changes */}
                {/* pass currentUser through as props to keep on refresh */}
        </section>
    )
}

export default SideBar;