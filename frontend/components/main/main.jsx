import React from "react";


import NavBarMainContainer from "../nav_bar/nav_bar_main_container";
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

        return (
            <div className="main-container">
                <div className="nav-container-main">
                    <NavBarMainContainer history={this.props.history} />
                </div>
                <SideBarContainer history={history}
                    currentUser={currentUser}
                    errors={errors}
                />

                <div className="current-container">
                    {path === "/home" && <HomeContainer />}


                    {path === "/playlist/:id" && <PlaylistShowContainer 
                        match={match} />}
                </div>
            </div>
        )    
    }

}

export default Main;