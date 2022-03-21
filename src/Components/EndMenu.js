import React from 'react'
import { Questions } from "../Helpers/Question";

const EndMenu = ({score,setScrore,setQuizState,name}) => {

  const handleRestart=()=>{
    setQuizState('quiz')
     setScrore(0)
  }

  return (
    <div className='endMenu'> 
    <h1>Quiz Finished</h1>
    <h3>{name} Score </h3>
    <h2>{score}/{Questions.length}</h2>
    <button onClick={handleRestart}>Restart Quiz</button>
    </div>
  )
}

export default EndMenu