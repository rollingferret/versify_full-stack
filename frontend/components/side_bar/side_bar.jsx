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
import SidebarButton from './side_bar_button'

const SideBar = (props) => {
    return (
        <section className='sidebar-container'>
            <nav className="sidebar">
                <div className="sidebar-button">
                    <div className="icon">
                        <MdOutlineAddBox />
                    </div>
                    <div className="text">
                        <Link to='/create'>Create Playlist</Link>
                    </div>
                </div>


                {/* <SidebarButton text='Home' icon={<AiFillHome />} path='/home' /> */}
                {/* <SidebarButton text='Search' icon={<FaSearch />} path='/search' /> */}
                {/* <SidebarButton text='Create Playlist' icon={<MdOutlineAddBox />} path='/home' /> */}
            </nav>
            <div className="line"></div>
            <PlaylistIndexContainer /> 
        </section>
    )
}

export default SideBar;