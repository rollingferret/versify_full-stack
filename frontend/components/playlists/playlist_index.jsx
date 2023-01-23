import React from "react";

import SideBarPlaylistButton from '../side_bar/side_bar_playlist_button'

// PlaylistIndex is simple enough to convert to functional component

// const PlaylistIndex = (props) => {

//     const { fetchPlaylists,
//         playlists,
//     } = props;



//     return (
//         <div className="playlist-index-container">
//             {playlists.map((playlist, idx) => (
//                 <SideBarPlaylistButton key={`${idx} + ${this.props.currentUsername}`} text={playlist.title} playlistId={playlist.id} />))
//             }
//         </div>
//     )
// }

class PlaylistIndex extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchPlaylists()
    }

    render () {
        console.log("INDEX PROPS", this.props)
        return (
            <div className="playlist-index-container">
                {this.props.playlists.map((playlist, idx) => (
                    <SideBarPlaylistButton key={`${idx} + ${this.props.currentUsername}`} text={playlist.title} playlistId={playlist.id} />))
          }
            </div>
        )    
    }

}

export default PlaylistIndex;