import React from "react";
import {GiRingedPlanet,
} from 'react-icons/gi';


import NavBarContainer from "../nav_bar/nav_bar_container";
import SideBarContainer from "../side_bar/side_bar_container";

class Home extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const {history,
            currentUser,
            createPlaylist,
            clearPlaylistErrors,
            errors,
        } = this.props;

        const logoDiv = (<div id="site-logo">
                <GiRingedPlanet /> 
                <h2> Versify</h2>
            </div>
        )

        console.log('HOME PROPS', this.props)        

        return (
            <div className="home-container">
                {logoDiv}
                <NavBarContainer history={this.props.history} />
                <SideBarContainer history={history}  
                    currentUser={currentUser}
                    errors={errors}
                />
            </div>
        )    
    }

}

export default Home;