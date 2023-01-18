import React from 'react'
import { Link,
} from 'react-router-dom';


import {AiFillHome,
} from 'react-icons/ai';
import {FaSearch,
} from 'react-icons/fa';
import {MdOutlineAddBox,p
} from 'react-icons/md';

import PlaylistIndexContainer from '../playlists/playlist_index_container';
import SideBarNavButton from './side_bar_nav_button'

const SideBar = (props) => {
    console.log('PROPS', props);

    const { createPlaylist,
        displayPlaylist,
        fetchPlaylists,
        currentUser,
        playlists,
    } = props

    const handleSubmitCreate = (e) => {
        e.preventDefault();

        const number = Object.values(playlists).length

        const defaultNew = ({ 
            title: `Untitled Playlist #${number}`,
            description: 'Please add a description',
            user_id: currentUser.id,
        })
        console.log({defaultNew})
        createPlaylist(defaultNew)
        .then ( () => fetchPlaylists(currentUser.id));
    }

    return (
        <section className='sidebar-container'>
            <nav className="sidebar">
                <button className="sidebar-nav"
                    name='playlist'
                    onClick={handleSubmitCreate}>
                        <div className="icon" ><MdOutlineAddBox /></div>
                        <div className="text-button" >Create Playlist</div>
                </button>
            </nav>
                {/* <div className="sidebar-button"> */}
                    {/* <div className="icon"> */}
                        {/* <MdOutlineAddBox />
                    </div>
                    <div className="text">
                        <Link to='/create'>Create Playlist</Link>
                    </div> */}
                {/* </div> */}


                {/* <SideBarNavButton text='Home' icon={<AiFillHome />} path='/home' /> */}
                {/* <SideBarNavButton text='Search' icon={<FaSearch />} path='/search' /> */}
            <div className="line"></div>
            <PlaylistIndexContainer currentUser={currentUser}/> 
        </section>
    )
}

export default SideBar;