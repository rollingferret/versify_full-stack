import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";

class PlaylistIndex extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <NavBarContainer history={this.props.history}/>
                <h1>Playlist Index Body PLACEHOLDER</h1>
            </div>
        )    
    }

}

export default PlaylistIndex;