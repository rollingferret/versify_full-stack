import React from "react";
import {
    Link,
  } from 'react-router-dom';

import NavBarContainer from "../components/nav_bar/nav_bar_container";

const session = {id: 1};
const entities = {
        users: {
            1: {id: 1, username: 'Howard'},
            2: {id: 2, username: 'Byron'}
        }
    }
    
const state = {
    session: {session},
    entities: {entities},
}

const Splash = () => (
    <div>
        {/* <NavBar /> */}
        <Link className="btn" to="/signup">Sign Up</Link>
    </div> 
)

export default Splash;