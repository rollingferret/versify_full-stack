import React from "react";

import ArtistIndex from "../artists/artist_index";

const Home = (props) => {
    // console.log('HOME PROPS', props)
    
    return (
        <div className="home">
            'THIS IS HOME'
            <div className="artist-index-home">
                <ArtistIndex />
            </div>
        </div>
    )
}

export default Home;