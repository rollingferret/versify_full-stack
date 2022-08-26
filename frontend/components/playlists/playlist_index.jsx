import React from "react";

import SidebarButton from '../side_bar/side_bar_button'

class PlaylistIndex extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchPlaylists();
    }

    render () {
        return (
            <div id="playlist-index-container">
                {this.props.playlists.map((playlist) => (
                    <SidebarButton key={playlist.id} text={playlist.title}/>))
          }
            </div>
        )    
    }

}

export default PlaylistIndex;