import React from 'react';
import BirthdayItem from './signup_items/birthday_item';

class Signup extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailCheck: '',
            passwordCheck: '',
            username: 'Enter a profile name',
            // birthday: null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput (field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    }

    handleSubmit (e) {
        e.preventDefault();
        // this.props.createUser(this.state)
        //     .then ( () => this.props.history.push('/playlists'));
        const { email, emailCheck, password, passwordCheck, username} = this.state
        console.log(this.state)
        if (!email || !emailCheck || !password || !passwordCheck || !username) {
                console.log("Fill out all fields.")
            }
        if (email !== emailCheck) {
            console.log("The email addresses don't match.")
        }
        if (password !== passwordCheck) {
            console.log("The passwords don't match.")
        }
        if (username === "Enter a profile name") {
            console.log("Enter a name for your profile.")
        }
    }
    // using playlists as the home webpage after login

    render() {
        return (
            <div className='signup-page'>
                <h1>Sign up for free to start listening.</h1>
                <h2>LOG IN AS DEMO USER - GOOGLE STYLING PLACEHOLDER
                    <p>or</p>
                    <p>Sign up with your email address.</p>
                </h2>

                <form className='session-form'>
                    <p><label>What's your email?
                        <p><input 
                                type="text" 
                                value={this.state.email} 
                                onChange={this.handleInput('email')}
                            /></p>
                    </label></p>
                    
                    <p><label>Confirm your email? PLACEHOLDER
                        <p><input 
                                type="text" 
                                value={this.state.emailCheck} 
                                onChange={this.handleInput('emailCheck')}
                            /></p>
                    </label></p>

                    <p><label>Create a password
                        <p><input 
                                type="password" 
                                value={this.state.password} 
                                onChange={this.handleInput('password')}
                            /></p>
                    </label></p>

                    <p><label>Confirm your password PLACEHOLDER
                        <p><input 
                                type="password" 
                                value={this.state.passwordCheck} 
                                onChange={this.handleInput('passwordCheck')}
                            /></p>
                    </label></p>

                    <p><label>What should we call you?
                        <p><input 
                                type="text" 
                                value={this.state.username} 
                                onChange={this.handleInput('username')}
                            /></p>
                    </label></p>

                  <BirthdayItem />

                    <p><button onClick={this.handleSubmit}>Sign Up</button></p>
                </form>

            </div>
        )
    }
}

export default Signup;