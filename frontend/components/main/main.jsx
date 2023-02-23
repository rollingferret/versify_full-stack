import React from "react";

import NavBarMainContainer from "../nav_bar/nav_bar_main_container";
import SideBarContainer from "../side_bar/side_bar_container";
import HomeContainer from "../home/home_container";
import PlaylistShowContainer from "../playlists/playlist_show_container";

class Main extends React.Component {
    constructor (props) {
        super(props);
    }

    currentViewType () {
        switch (this.props.path) {
            case "/home":
                return <HomeContainer />;
            case "/playlist/:id":
                return <PlaylistShowContainer  match={this.props.match} />;
            default:
                return <HomeContainer />;
        }
    }

    render () {
        const {history,
            currentUser,
            errors,
        } = this.props;

    console.log('MAIN PROPS', this.props)        

        return (
            <div className="main-container">
                <nav className="nav-container-main">
                    <NavBarMainContainer history={history} />
                </nav>
                
                <SideBarContainer history={history}
                    currentUser={currentUser}
                    errors={errors}
                />
                <div className="current-container">
                    {this.currentViewType()}
                </div>
            </div>
        )    
    }

}

export default Main;