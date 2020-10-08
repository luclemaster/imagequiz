import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            showLoginForm: false
        };
    }
    login = () => {
        this.setState({
            showLoginForm: true
        });
    }
    render() {
        if (this.state.showLoginForm)
        {
            return(
                <div>
                    <form>
                        <lable>Username:</lable>
                        <input type ="text"></input>
                        <button type="submit">Login</button>
                    </form>
                </div>

            );
        }
        return (
            <div>
                <div>
                <button onClick={this.login}>Login</button>
                </div>
            
                Hello from the homepage!
            </div>
        );
    }
}

export default Home;