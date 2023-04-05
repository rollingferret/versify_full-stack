import React, { useEffect } from "react";

import ArtistIndex from "../artists/artist_index";

const Home = ({
    params,
    history,
    fetchArtists,
}) => {

    useEffect( () => {
        fetchArtists();
    })
    // console.log('HOME PROPS', props)
    
    return (
        <div className="home">
            'THIS IS HOME'
            <div className="artist-index-home">
                <ArtistIndex params={params} history={history}/>;
            </div>
        </div>
    )
}

export default Home;