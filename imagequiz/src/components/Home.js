import React from 'react';
import './Home.css';
import cherryblossom from './cherryblossom.png'
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
            authenticated: false,
            quiz: false, 
            correctAnswers : 0,
            questionNum: 0
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
        this.setState({username: value});
    }
    startQuiz = () => {
        this.setState({quiz: true});
    }
    correct = () => {
        this.setState({correctAnswers: this.state.correctAnswers + 1});
        this.setState({questionNum: this.state.questionNum + 1});
    }
    incorrect = () => {
        this.setState({questionNum: this.state.questionNum + 1});
    }
    reset = () => {
        this.setState({questionNum: 0});
        this.setState({correctAnswers: 0});
    }
    returnHome = () => {
        this.setState({quiz:false})
    }
 
    body = () => {
        return(
            <div className="pictureText">Hello from the homepage!
            <table>
            <tr>
                <td>
                <img src={cherryblossom} onClick={this.startQuiz}></img>
                <div className="pictureText">cherry
                </div>
                </td>
                <td>
                <img src={daffodil} onClick={this.startQuiz}></img>
                <div className="pictureText">daffodil
                </div>
                </td>
                <td>
                <img src={daisy} onClick={this.startQuiz}></img>
                <div className="pictureText">daisy
                </div>
                </td>
                <td>
                <img src={lily} onClick={this.startQuiz}></img>
                <div className="pictureText">lily
                </div>
                </td>
            </tr>
            <tr>
                <td>
                <img src={rose} onClick={this.startQuiz}></img>
                <div className="pictureText">rose
                </div>
                </td>
                <td>
                <img src={sunflower} onClick={this.startQuiz}></img>
                <div className="pictureText">sunflower
                </div>
                </td>
                <td>
                <img src={tulip} onClick={this.startQuiz}></img>
                <div className="pictureText">tulip
                </div>
                </td>
                <td>
                <img src={waterlily} onClick={this.startQuiz}></img>
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
        if( this.state.quiz)
        {
            if(this.state.questionNum == 0)
            {
                return(
                    <div>
                        <img src={cherryblossom}></img>
                        <button onClick={this.correct}>cherryblossom</button>
                        <button onClick={this.incorrect}>daffodil</button>
                        <button onClick={this.incorrect}>lily</button>
                        <button onClick={this.incorrect}>daisy</button>
                    </div>
                )
            }
            else if(this.state.questionNum == 1)
            {
                return(
                    <div>
                        <img src={daffodil}></img>
                        <button onClick={this.incorrect}>rose</button>
                        <button onClick={this.correct}>daffodil</button>
                        <button onClick={this.incorrect}>lily</button>
                        <button onClick={this.incorrect}>tulip</button>
                    </div>
                )
            }
            else if(this.state.questionNum == 2)
            {
                return(
                    <div>
                        <img src={sunflower}></img>
                        <button onClick={this.incorrect}>daffodil</button>
                        <button onClick={this.incorrect}>lily</button>
                        <button onClick={this.correct}>sunflower</button>
                        <button onClick={this.incorrect}>waterlily</button>
                    </div>
                )
            }
            else if(this.state.questionNum == 3)
            {
                return(
                    <div>
                        <img src={daisy}></img>
                        <button onClick={this.incorrect}>cherryblossom</button>
                        <button onClick={this.correct}>daisy</button>
                        <button onClick={this.incorrect}>sunflower</button>
                        <button onClick={this.incorrect}>tulip</button>
                    </div>
                )
            }
            else if(this.state.questionNum == 4)
            {
                return(
                    <div>
                        <img src={tulip}></img>
                        <button onClick={this.incorrect}>rose</button>
                        <button onClick={this.incorrect}>cherryblossom</button>
                        <button onClick={this.correct}>tulip</button>
                        <button onClick={this.incorrect}>daisy</button>
                    </div>
                )
            }
            else if(this.state.questionNum == 5)
            {
                return(
                    <div>
                        <img src={rose}></img>
                        <button onClick={this.incorrect}>waterlily</button>
                        <button onClick={this.incorrect}>daisy</button>
                        <button onClick={this.incorrect}>tulip</button>
                        <button onClick={this.correct}>rose</button>
                    </div>
                )
            }
            else
            {
                return(
                    <div>
                        correctAnswers: {this.state.correctAnswers} /6;
                        <button onClick={this.reset}>Retry</button>;
                        <button onClick={this.returnHome}>Home</button>
                    </div>
                )
            }
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