import React from "react";

import HomeContainer from '../home/home_container.jsx'
import PlaylistShowContainer from "../playlists/playlist_show_container";

const CurrentView = (props) => {

    console.log('CURRENTitem PROPS', props);

    const currentViewType = () => {
        const { path,
            params,
            currentUser,
        } = props;

        switch (path) {
            case "/home":
                return <HomeContainer />;
            case "/playlist/:id":
                return <PlaylistShowContainer
                    params={params} currentUser={currentUser} />;
            default:
                return <HomeContainer />;
        }
    }


    return (
        <>
            { currentViewType() }
        </>
    )

}

export default CurrentView;