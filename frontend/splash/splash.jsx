import React from "react";

import NavBarContainer from "../components/nav_bar/nav_bar_container";
import SplashDisplay from "./splash_display";

const Splash = (props) => {
    const { currentUser } = props;

    return (
        <div className="splash">
            <div>
                <NavBarContainer/>
            </div>
            <div className='splash-display'>
                <SplashDisplay currentUser={currentUser}/>
            </div>
        </div>
    )

}

export default Splash;

