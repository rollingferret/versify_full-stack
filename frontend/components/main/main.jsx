import React from "react";

import NavBarMainContainer from "../nav_bar/nav_bar_main_container";
import SideBarContainer from "../side_bar/side_bar_container";
import CurrentViewContainer from "./current_view_container";

class Main extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const {history,
            params,
            path,
            currentUser,
            errors,
        } = this.props;

    console.log('MAIN PROPS', this.props)        

        return (
            <div className="main-container">
                <nav className="nav-container-main">
                    <NavBarMainContainer history={history} />
                </nav>
                
                <SideBarContainer history={history}
                    currentUser={currentUser}
                    errors={errors}
                />
                <div className="current-container">
                    <CurrentViewContainer currentUser={currentUser}
                        params={params} path={path}
                    />
                </div>
            </div>
        )    
    }

}

export default Main;