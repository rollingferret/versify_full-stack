import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import MyLinks from "../my_links";


class PlaylistIndex extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <MyLinks />
                <NavBarContainer />
                <h1>Playlist Index Body PLACEHOLDER</h1>
            </div>
        )    
    }

}

export default PlaylistIndex;