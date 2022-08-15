import React from 'react';

class Signup extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
        this.props.createUser(this.state)
            .then ( () => this.props.history.push('/playlists'));
    }
    // using playlists as the home webpage after login

    render() {
        return (
            <h1>Signup Defined</h1>
        // <div className='session-form'>
        //     <h1>Sign up for free to start listening.</h1>
        //     <h2>LOG IN AS DEMO USER - GOOGLE STYLING PLACEHOLDER
        //         <p>or</p>
        //         <p>Sign up with your email address.</p>
        //     </h2>
        //     <form>
        //         <label>What's your email?
        //             <input 
        //                 type="text" 
        //                 value={this.state.email} 
        //                 onChange={this.handleInput('email')}
        //             />
        //         </label>
                
        //         <label>Confirm your email? PLACEHOLDER
        //         </label>

        //         <label>Create a password
        //             <input 
        //                 type="text" 
        //                 value={this.state.password} 
        //                 onChange={this.handleInput('password')}
        //             />
        //         </label>

        //         <label>What's your date of birth? PLACEHOLDER</label>

        //         <button onClick={this.handleSubmit}>Sign Up</button>
        //     </form>

        // </div>
        )
    }
}

export default Signup;