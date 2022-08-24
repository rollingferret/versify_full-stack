import React from 'react';

const SideBarButton = (props) => {
    const { text,
            icon,
    } = props;
    
    return (
        <button className="sidebar-button" 
            // onClick= {this.handleSubmitDemo}
            >
            <div className="icon"> {icon} </div>
            <div className="text"> {text} </div>
        </button>
    )
}

export default SideBarButton;