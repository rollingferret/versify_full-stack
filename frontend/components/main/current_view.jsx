import React from "react";
import { editPlaylist } from "../../actions/playlists_actions.js";

import HomeContainer from '../home/home_container.jsx'
import PlaylistShowContainer from "../playlists/playlist_show_container";

const currentView = (props) => {

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

export default currentView;