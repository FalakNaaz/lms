import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../App.css";
import dotNetQuestions from "./DotNetQuestions";
import reactQuestions from "./ReactQuestions";
import SidebarCom from "../../components/Sidebar/SidebarCom";
import { useSelector } from "react-redux";

export default function App() {
  const sidebarToggle = useSelector((state) => state.sidebar);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  /* State for storing the score of the Learner and post it to the Strapi */
  const [score, setScore] = useState(0);
  const [currUser, setCurrUser] = useState();
  const [questions, setQuestions] = useState(reactQuestions);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions?.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      storeScore(isCorrect ? score + 1 : score);
      setShowScore(true);
    }
  };

  const storeScore = async (score) => {
    await axios.put(`http://localhost:1337/api/users/${currUser[0].id}`, {
      assessmentScore: score,
    });
  };

  useEffect(() => {
    const getEnrolledCourse = async () => {
      const currUserEmail = localStorage.getItem("currUserEmail");
      const users = await axios.get(`http://localhost:1337/api/users`);
      const filteredUsers = users.data.filter(
        (user) => user.email === currUserEmail
      );
      setCurrUser(filteredUsers);
      const response = await axios.get(
        `http://localhost:1337/api/users/${filteredUsers[0].id}?populate=*`
      );

      switch (response.data.training.name) {
        case "React":
          setQuestions(reactQuestions);
          break;
        case ".Net":
          setQuestions(dotNetQuestions);
          break;
        default:
          break;
      }
    };
    getEnrolledCourse();
  }, []);

  return (
    <>
      {sidebarToggle ? <SidebarCom /> : null}
      <div className="app-quiz" style={{ height: "80vh" }}>
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions?.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion]?.questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion]?.answerOptions.map((answerOption, index) => (
                <button key={index}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption?.isCorrect)
                  }
                >
                  {answerOption?.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
