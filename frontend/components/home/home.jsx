import React from "react";
import {GiRingedPlanet,
} from 'react-icons/gi';


import NavBarContainer from "../nav_bar/nav_bar_container";
import SideBar from '../side_bar/side_bar'

class Home extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const logoDiv = (<div id="site-logo">
                <GiRingedPlanet /> 
                <h2> Versify</h2>
            </div>
        )
        return (
            <div className="home-container">
                {logoDiv}
                <NavBarContainer history={this.props.history} />
                <SideBar history={this.props.history} />
            </div>
        )    
    }

}

export default Home;