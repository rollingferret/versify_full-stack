import React from "react";
import {GiRingedPlanet,
} from 'react-icons/gi';


import NavBarContainer from "../nav_bar/nav_bar_container";
import SideBarContainer from "../side_bar/side_bar_container";
import HomeContainer from "../home/home_container";
import PlaylistShowContainer from "../playlists/playlist_show_container";

class Main extends React.Component {
    constructor (props) {
        super(props);
    }

    viewType () {
        switch (this.props.path) {
            case "/home":
                return null;
        case "/playlist/:id":
                return <PlaylistShowContainer />;

        }
    }

    render () {
        const {history,
            match,
            currentUser,
            path,
            clearPlaylistErrors,
            errors,
        } = this.props;

    console.log('MAIN PROPS', this.props)        

        const logoDiv = (<div id="site-logo">
                <GiRingedPlanet /> 
                <h2> Versify</h2>
            </div>
        )

        return (
            <div className="main-grid-container">
                {logoDiv}
                <NavBarContainer history={this.props.history} />
                <SideBarContainer history={history}
                    currentUser={currentUser}
                    errors={errors}
                />

                <div className="show-container">
                    {path === "/home" && <HomeContainer />}
                    {path === "/playlist/:id" && <PlaylistShowContainer 
                        match={match} />}
                </div>
            </div>
        )    
    }

}

export default Main;