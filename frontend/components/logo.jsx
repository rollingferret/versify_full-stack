import React from 'react';

import {GiRingedPlanet,
} from 'react-icons/gi';

const Logo = (props) => {

    return( 
        <div 
        className="site-logo">
        {props.history.location.pathname === '/' 
            ? 
            <>
                <GiRingedPlanet /> 
                <h2> Versify</h2>
            </>
            : null
        }    
    </div>
    )
}

export default Logo;