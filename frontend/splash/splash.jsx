import React from "react";

import MyLinks from "../components/my_links";
import NavBarContainer from "../components/nav_bar/nav_bar_container";
import SplashDisplay from "./splash_display";

const Splash = (props) => {
    const { currentUser } = props;

    return (
        <div>
            <MyLinks />
            <NavBarContainer />
            <SplashDisplay currentUser={currentUser}/>
        </div>
    )

}

export default Splash;

