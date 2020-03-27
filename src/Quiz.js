import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1
        };
    }

    render() {
            //QuizEnd should display only at the end of the quiz, so isQuizEnd determines if it is the end
        const isQuizEnd = (this.state.quiz_position - 1 === quizData.quiz_questions.length) ? true : false;

        if (isQuizEnd) {
            return (
                <div>
                    <QuizEnd />
                </div>
            )
        } else {
            return (
                <div>
                    <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
                </div>
            )
        }
        

    }
}

export default Quiz;