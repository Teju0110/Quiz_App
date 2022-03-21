import React from 'react'

const MainMenu = ({setQuizState,setName,name}) => {

const handleInput =(e)=>{
    setName(e.target.value)
}

  return (
    <div className='menu'>
        <h3>Enter You Name</h3>
        <input type='text' onChange={handleInput}/>  
        <h3>Hi {name} !!</h3>
        <button onClick={()=>{setQuizState("quiz")}}> Start Quiz</button>

    </div>
  )
}

export default MainMenu