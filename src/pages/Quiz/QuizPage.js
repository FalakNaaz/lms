import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../App.css';
import dotNetQuestions from './DotNetQuestions';
import reactQuestions from './ReactQuestions';


export default function App() {
	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [currUser, setCurrUser] = useState();
  const [enrolledCourse, setEnrolledCourse] = useState();
 const [questions, setQuestions] = useState([]);
	const handleAnswerOptionClick =  (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions?.length) {
			setCurrentQuestion(nextQuestion);
		} else {
      storeScore(isCorrect ?  score+1 : score) 
			setShowScore(true);
		}
	};
  const storeScore = async (score) => {
   
    await axios.put(`http://localhost:1337/api/users/${currUser[0].id}`,
    {
      "assessmentScore": score
    })
    console.log("score = ", score);
  }
  useEffect(() => {
    const getEnrolledCourse = async () => {
      const currUserEmail = localStorage.getItem("currUserEmail")
      const users = await axios.get(`http://localhost:1337/api/users`);
      const filteredUsers = users.data.filter((user) => user.email === currUserEmail);
      setCurrUser(filteredUsers)
      console.log("filteredUsers = ", filteredUsers);
      const response = await axios.get(
        `http://localhost:1337/api/users/${filteredUsers[0].id}?populate=*`
      );
      console.log("response = ", response.data.training.name)
      setEnrolledCourse(response.data.training.name)
      //console.log("hello")
      switch(response.data.training.name){
        
        case 'React':
        
           setQuestions(reactQuestions)
          break;
        case 'DotNet':
           setQuestions(dotNetQuestions)
    
      }
    }
    getEnrolledCourse();
   
   
  }, [])
  console.log(" questions from here = ", questions)
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
							<span>Question {currentQuestion + 1}</span>/{questions?.length}
						</div>
						<div className='question-text'>{questions[currentQuestion]?.questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption?.isCorrect)}>{answerOption?.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
