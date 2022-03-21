import { useState } from 'react';
import './App.css';
import EndMenu from './Components/EndMenu';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';

function App() {

  const[quizState,setQuizState]=useState("menu")
  const[name,setName]=useState("")
  const[score,setScrore]=useState(0)

  return (
    <div className="App">
      <h1>Quiz App</h1>
     {quizState === "menu" && <MainMenu setQuizState={setQuizState} name={name} setName={setName}/>}
     {quizState ==="quiz" && <Quiz setQuizState={setQuizState} score={score} setScrore={setScrore}/>}
     {quizState === "EndMenu" && <EndMenu score={score} setScrore={setScrore} setQuizState={setQuizState} name={name} setName={setName}  />}
    </div>
  );
}

export default App;
