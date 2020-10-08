import React from 'react'

class Home extends React.Component {
    
    login = () => {

    }
    render() {
        return (
            <div>
                <button onClick={this.login}>Login</button>
                Hello from the homepage!
            </div>
        );
    }
}

export default Home;