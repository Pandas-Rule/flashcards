import Header from './components/Header'; 
import Flashcard from './components/Flashcard';
import React, { useEffect, useState } from 'react';
import '../styles.css';

function App() {
  const [ category, setCategory ] = useState([]);
  const [score, setScore ] = useState(0);
  
  useEffect(()=> {
    console.log(category); 
  },[category]);

  return (
    <div className="App">
      <Header setCategory={setCategory} category={category} score={score}/>
      <Flashcard category={category} setScore={setScore}/>
    </div>
  );
}

export default App;
