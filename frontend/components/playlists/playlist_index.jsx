import React from "react";

import SidebarButton from '../side_bar/side_bar_button'

class PlaylistIndex extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchPlaylists()
    }

    render () {
        debugger
        return (
            <div className="playlist-index-container">
                {this.props.playlists.map((playlist, idx) => (
                    <SidebarButton key={`${idx} + ${this.props.currentUsername}`} text={playlist.title} playlistId={playlist.id} />))
          }
            </div>
        )    
    }

}

export default PlaylistIndex;