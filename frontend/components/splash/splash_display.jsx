import React from "react";

const SplashDisplay = (props) => {
    
    const loggedOutDisplay = (
        <div className="splash-msg">
            <h1><span>Music is everything.</span></h1>
        </div>
    )
    const { currentUser } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push('/home');
    }

    let loggedInDisplay;
    if (currentUser) {
        const username = currentUser.username
        const name = username.charAt(0).toUpperCase() + username.slice(1)
        return loggedInDisplay = (
            <div className='splash-msg'>
                <h1><span>Welcome back, {name}.</span></h1>
                <h3><span>Jump back in</span></h3>
                <button className="session-button" 
                    id="continue-button" 
                    onClick= {handleSubmit}>
                    OPEN WEB PLAYER
                </button>
            </div>
        )
    }

    return (currentUser ? loggedInDisplay : loggedOutDisplay)
}

export default SplashDisplay;