import React, { useState } from "react";
import { Questions } from "../Helpers/Question";

const Quiz = ({ setQuizState, score, setScrore }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (optionChosen === "") {
      alert("Please select Answer");
    } 
    else if (optionChosen !== "") {
      setCurrentQuestion(currentQuestion + 1);
      setOptionChosen("")
    }

    if (Questions[currentQuestion].answer === optionChosen) {
      setScrore(score + 1);
    }
  };
  const finishQuiz = () => {

    if (optionChosen === "") {
      alert("Please select Answer");
    } 
    else if (optionChosen !== "") {
        setQuizState("EndMenu");
    }

    if (Questions[currentQuestion].answer === optionChosen) {
      setScrore(score + 1);
    }

    
  };

  return (
    <div className="quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currentQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion === Questions.length - 1 ? (
        <button className="question" onClick={finishQuiz}>
          Finish Quiz
        </button>
      ) : (
        <button className="question" onClick={nextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default Quiz;
