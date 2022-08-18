import React from 'react';
import BirthdayItem from './signup_items/birthday_item';

class SessionForm extends React.Component {
    constructor (props) {
        super(props);
        this.formType = props.formType;
        this.state = {
            email: '',
            password: '',
            emailConfirmation: '',
            password_confirmation: '',
            username: '',
            yearValue: '1990',
            monthValue: '01',
            dayValue: '01',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput (field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    }

    handleSubmit (e) {
        console.log(this.state);
        console.log(this.formType);
        e.preventDefault();
        const { email, 
            email_confirmation, password_confirmation, 
            username, password,
            yearValue, monthValue, dayValue,
            } = this.state;

        if (this.formType === 'signup') {
            //Reformat birthday input to Date object
            const bdayStr = ( yearValue+'/'+monthValue+'/'+dayValue )
            console.log('bdayStr', bdayStr)
            const dateBday = new Date(bdayStr + "Z");

            //Set up User object for User#create
            const formUser = {
                email: email,
                email_confirmation,
                birthday: dateBday,
                username: username,
                password: password,
                password_confirmation,
            }

            this.props.createUser(formUser)
                .then ( () => this.props.history.push('/api/users/:user_id/playlists'));
            // using playlists as the home webpage after login
        }

        if (this.formType === 'login') {
            //Set up User object for Session#create
            const formUser = {
                username: username,
                password: password,
            }
            this.props.createSession(formUser)
                .then ( () => this.props.history.push('/api/users/:user_id/playlists'));
            // using playlists as the home webpage after login
        }
    }

    render() {
        const { email, emailConfirmation, 
            password, password_confirmation, 
            username
        } = this.state

        const navLink = this.props.navLink;

        const demoLogin = (
            <div className="sessionButton">
                LOG IN AS DEMO USER
            </div>
        )

        const loginGreeting = (
            <div className='login-greeting'>
                {demoLogin}
                <h2>
                    <p />or
                    <p />Log in with your username.
                </h2>
            </div>
        )

        const loginForm = (
            <form className='session-form'>
                <p /><label>Username
                    <p /><input 
                            type="text" 
                            value={username} 
                            onChange={this.handleInput('username')}
                        />
                </label>
                <p /><label>Password
                        <p /><input 
                                type="password" 
                                value={password} 
                                onChange={this.handleInput('password')}
                            />
                    </label>
                <p /><button onClick={this.handleSubmit}>Log In</button>
            </form>
        )

        const signupGreeting = (
            <div className='signup-greeting'>
                <h1>Sign up for free to start listening.</h1>
                { demoLogin }
                <h2>
                    <p />or
                    <p />Sign up with your email address.
                </h2>
            </div>
        )

        const signupForm = (
            <form className='session-form'>
                <p /><label>What's your email?
                    <p /><input 
                            type="text" 
                            value={email} 
                            onChange={this.handleInput('email')}
                        />
                </label>
                <p /><label>Confirm your email
                    <p /><input 
                            type="text" 
                            value={emailConfirmation} 
                            onChange={this.handleInput('emailConfirmation')}
                        />
                </label>
                <p /><label>Create a password
                    <p /><input 
                            type="password" 
                            value={password} 
                            onChange={this.handleInput('password')}
                        />
                </label>
                <p /><label>Confirm your password
                    <p /><input 
                            type="password" 
                            value={password_confirmation} 
                            onChange={this.handleInput('password_confirmation')}
                        />
                </label>
                <p /><label>What should we call you?
                    <p /><input 
                            type="text" 
                            value={username} 
                            onChange={this.handleInput('username')}
                        />
                </label>
                <BirthdayItem handleSubmit={this.handleSubmit}
                    handleInput={this.handleInput.bind(this)}
                    monthValue={this.state.monthValue}
                />
                <p /><button onClick={this.handleSubmit}>Sign Up</button>
            </form>
        )

        const signUp = (
            <div>
                {signupGreeting}
                {signupForm}
                {navLink}
            </div>
        )

        const userLogin = (
            <div>
                {loginGreeting}
                {loginForm}
                {navLink}
            </div>
        )

        return (
            this.formType === 'signup' ?  signUp : userLogin
        )
    }
}

export default SessionForm;