import React from "react";
import TrackCard from "./track_card";


const TrackIndex = ({
    tracks,
    history,
}) => {

    return (
        <div className="track-index">
            <div className="track-index-headings">
                <div className="track-index-heading-tracknum">
                    #
                </div>
                <div className="track-index-heading-title">
                    Title
                </div>
                <div className="track-index-heading-liked">
                    &#128153;
                </div>
                <div className="track-index-heading-duration">
                    &#9201;
                </div>
            </div>
            {tracks.length > 0 ? 
                (tracks.map( track => {
                    return <TrackCard key={`"track" + ${track.id}`} track={track} history={history} />
                }))
                : null
            }
        </div>
    )
}

export default TrackIndex;