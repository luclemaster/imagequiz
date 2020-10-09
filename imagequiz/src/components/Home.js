import React from 'react';
import './Home.css';
import cherry from './cherryblossom.png'
import daffodil from './daffodil.png'
import daisy from './daisy.jpg'
import lily from './lily.jpg'
import rose from './rose.png'
import sunflower from './sunflower.png'
import tulip from './tulip.png'
import waterlily from './waterlily.png'

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
        const name = event.target.name;
        this.setState({username: value})
    }

    body = () => {
        return(
            <div className="pictureText">Hello from the homepage!
            <table>
            <tr>
                <td className="pictureText">
                <img src={cherry}></img>
                <div className="pictureText">cherry
                </div>
                </td>
                <td className="pictureText">
                <img src={daffodil}></img>
                <div className="pictureText">daffodil
                </div>
                </td>
                <td className="pictureText">
                <img src={daisy}></img>
                <div className="pictureText">daisy
                </div>
                </td >
                <td className="pictureText">
                <img src={lily}></img>
                <div className="pictureText">lily
                </div>
                </td>
            </tr>
            <tr>
                <td>
                <img src={rose}></img>
                <div className="pictureText">rose
                </div>
                </td>
                <td>
                <img src={sunflower}></img>
                <div className="pictureText">sunflower
                </div>
                </td>
                <td>
                <img src={tulip}></img>
                <div className="pictureText">tulip
                </div>
                </td>
                <td>
                <img src={waterlily}></img>
                <div className="pictureText">waterlily
                </div>
                </td>
            </tr>
        </table>
        </div>
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