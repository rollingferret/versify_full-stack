import React from 'react';

const SideBarNavButton = (props) => {
    // eg. Home button, Search button
    const { text,
        icon,
        url,
        history,
    } = props;

    console.log('SideBarNAVButtonPROPS', props);

    const clickToNavigate = (e) => {
        e.preventDefault();
        history.push(`/${url}`)
    }

    return (
        <button className="sidebar-nav"
            onClick={clickToNavigate}>
            <div className="icon" > {icon} </div>
            <div className="text-playlist" > {text} </div>
        </button>
    )
}

export default SideBarNavButton;