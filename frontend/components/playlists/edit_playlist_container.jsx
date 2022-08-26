import { connect } from "react-redux";

// import { clearPlaylistErrors,
//     createPlaylist,
//     displayPlaylist,
//     fetchPlaylists,
//     editPlaylist,
//     removePlaylist,
// } from "../../actions/playlists_actions";
    
// import Home from './home'

const mapStateToProps = ( {errors}) => ({
//     errors: errors.session, 
//     formType: 'login',
//     navLink: {
//         text: "Don't have an account? Sign up for Spotify.",
//         link: "/signup",
//     },
//     demoText: 'LOG IN AS DEMO USER',
//     greetingText: 'To continue, log in to Spotify.',
//     formText: 'Log in with your username.',
})

const mapDispatchToProps = (dispatch) => ({
    // fetchPlaylists: () => dispatch( fetchPlaylists() ),
    // editPlaylist: (playlist, id) => dispatch( editPlaylist(playlist, id) ),
    // displayPlaylist: (id) => dispatch( displayPlaylist(id) ),
    // createPlaylist: (formPlaylist) => dispatch( createPlaylist(formPlaylist) ),
    // clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)