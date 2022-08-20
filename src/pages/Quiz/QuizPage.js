import axios from 'axios';
import React, { useState } from 'react';
import '../../App.css';
import dotNetQuestions from './DotNetQuestions';
import reactQuestions from './ReactQuestions';


export default function App() {
	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  let questions;
  const enrolledCourse = 'DotNet';
  switch(enrolledCourse){
    case 'React':
       questions = reactQuestions;
      break;
    case 'DotNet':
       questions = dotNetQuestions;

  }
	const handleAnswerOptionClick =  (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
      storeScore(isCorrect ?  score+1 : score) 
			setShowScore(true);
		}
	};
  const storeScore = async (score) => {
    await axios.put('http://localhost:1337/api/users/1',
    {
      "username": "falaknaz",
      "email": "falak@gmail.com",
      "password": "123456",
      "assessmentScore": score
    })
    console.log("score = ", score);
  }
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
