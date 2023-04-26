import React from "react";

import HomeContainer from '../home/home_container.jsx'
import PlaylistShowContainer from "../playlists/playlist_show_container";
import ArtistShowContainer from "../artists/artist_show_container";

const CurrentView = (props) => {

    console.log('CURRENTitem PROPS', props);

    const currentViewType = () => {
        const { path,
            params,
            currentUser,
            history,
        } = props;

        switch (path) {
            case "/home":
                return <HomeContainer 
                    params={params} history={history} path={path}/>;
            case "/playlist/:id":
                return <PlaylistShowContainer
                    params={params} currentUser={currentUser} history={history}/>;
            case "/artist/:id":
                return <ArtistShowContainer
                    params={params} currentUser={currentUser} history={history}/>;
            default:
                return <HomeContainer 
                    params={params} history={history} path={path}/>;
        }
    }


    return (
        <>
            { currentViewType() }
        </>
    )

}

export default CurrentView;