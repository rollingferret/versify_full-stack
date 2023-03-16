import React, { useEffect } from "react";

import NavBarMainContainer from "../nav_bar/nav_bar_main_container";
import SideBarContainer from "../side_bar/side_bar_container";
import CurrentViewContainer from "./current_view_container";

const Main = ({history,
    params,
    path,
    currentPlaylist,
    currentUser,
    errors,
    fetchPlaylists,
    displayPlaylist,
}) => {

    // useEffect( () => {
    //     fetchPlaylists();
    // }, [currentPlaylist]);

    return (
        <div className="main-container">
            <nav className="nav-container-main">
                <NavBarMainContainer history={history} />
            </nav>
            
            <SideBarContainer history={history}
                path={path}
                currentUser={currentUser}
                errors={errors}
            />
            <div className="current-container">
                <CurrentViewContainer currentUser={currentUser}
                    params={params} path={path} history={history}
                />
            </div>
        </div>
    )    
}

export default Main;