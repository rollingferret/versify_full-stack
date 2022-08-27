import React from "react";

import NavBarContainer from "../nav_bar/nav_bar_container";
import SplashDisplay from "./splash_display";

const Splash = (props) => {
    const { currentUser, history } = props;
 
    return (
        <div className="splash-page">
            <NavBarContainer history={history}/>
            <section className='splash-display'>
                    <SplashDisplay currentUser={currentUser} history={history}/>
            </section>
        </div>
    )

}

export default Splash;

