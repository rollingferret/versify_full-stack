import React from "react";

import NavBarSplashContainer from "../nav_bar/nav_bar_splash_container";
import SplashDisplay from "./splash_display";
import MobileWarning from "../errors/mobile_warning";

const Splash = (props) => {
    const { currentUser, history } = props;
 
    return (
        <>
            <MobileWarning />
            <div className="splash-page">
                <NavBarSplashContainer history={history}/>
                <section className='splash-display'>
                        <SplashDisplay currentUser={currentUser} history={history}/>
                </section>
            </div>
        </>
    )

}

export default Splash;

