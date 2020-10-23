import React from  'react';
class Entry extends React.Component {
    constructor(props) {
        this.state ={
            correctAnswers : 0
        }
    }
    checkAnswer = (choice) => {
        if (this.props.correct == choice)
        {
            //this.setState(correctAnswers = correctAnswers + 1)
        }
    }
    render() {
        const { entry } = this.props
        return (
            <div>
                <button onClick={this.checkAnswer(entry.options[0])}>{entry.options[0]}</button>
                <button onClick={this.checkAnswer(entry.options[1])}>{entry.options[1]}</button>
                <button onClick={this.checkAnswer(entry.options[2])}>{entry.options[2]}</button>
                <button onClick={this.checkAnswer(entry.options[3])}>{entry.options[3]}</button>
            </div>
        );
    }
}
export default Entry;