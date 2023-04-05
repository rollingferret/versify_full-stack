import React from "react";

import ArtistIndexContainer from "../artists/artist_index_container";

const Home = ({
    params,
    history,
    path,
    fetchArtists,
}) => {
    // console.log('HOME PROPS', props)

    return (
        <div className="home">
            <ArtistIndexContainer params={params} history={history} path={path}/>;
        </div>
    )
}

export default Home;