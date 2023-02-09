import React from 'react';

import {GiRingedPlanet,
} from 'react-icons/gi';

const Logo = (props) => {
    console.log('LOGO PROPS', props)

    return( 
            <>
                <GiRingedPlanet /> 
                <h2> Versify</h2>
            </>

    )
}

export default Logo;