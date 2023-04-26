import React, { useEffect } from "react";
import { displayArtist } from "../../actions/artist_actions";

const ArtistShow = (
    // props
    {   currentArtist,
        albums,
        params,
        currentUser,
        history,
        displayArtist,
        clearCurrent,
    }
) => {

    // console.log("ARTIST SHOW", props);
    useEffect( () => {
        displayArtist(params.id)

        return () => clearCurrent();
    }, [])

    
    return <div>
        THIS IS ARTIST SHOW.
        <br />{currentArtist.name}
    </div>
}

export default ArtistShow;