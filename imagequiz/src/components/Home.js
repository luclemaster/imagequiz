import React from 'react';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            showLoginForm: false,
            authenticated: false
        };
    }
    login = () => {
        this.setState({
            showLoginForm: true
        });
    }

    onSubmit = (event) => {
        if(this.state.username.trim().length > 0)
        {
            this.setState({authenticated: true});
        }
        event.preventDefault();
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name
        this.setState({username: value})
    }

    body = () => {
        return(
            <div>Hello from the homepage!</div>
        )
    }
    render() {
        if ((!this.state.authenticated) && this.state.showLoginForm)
        {
            return(
                <div>
                    <form onSubmit={this.onSubmit}>
                        <lable>Username:</lable>
                        <input 
                        type ="text" 
                        value={this.state.username}
                        onChange={this.handleChange}
                        ></input>
                        <button type="submit">Login</button>
                    </form>
                </div>
            );
        }
        return (
            <div>
                <div className="loginButton">
                {this.state.authenticated ? this.state.username 
                : <button onClick={this.login}>Login</button>}
                </div>
                {this.body()}
            </div>
        );
    }
}

export default Home;