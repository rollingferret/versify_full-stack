import React from 'react';

const SideBarButton = (props) => {
    const { text,
        icon,
    } = props;

    return (
        <button className="sidebar">
            <div className="icon" > {icon} </div>
            <div className="text-playlist" > {text} </div>
        </button>
    )
}

export default SideBarButton;