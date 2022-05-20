import Header from './components/Header'; 
import Flashcard from './components/Flashcard';
import React, { useEffect, useState } from 'react';



function App() {
  const [ category, setCategory ] = useState([]);
  
  useEffect(()=> {
    console.log(category); 
  },[category]);

  return (
    <div className="App">
      <Header setCategory={setCategory} category={category}/>
      <Flashcard category={category}/>
    </div>
  );
}

export default App;
