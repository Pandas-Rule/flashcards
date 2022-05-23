import Button from './Button';
import React, {useEffect, useState} from 'react';


const Flashcard = ({ category, setScore })=> { 

  const [ front, setFront ] = useState(true); 
  const [question, setQuestion]= useState('');
  const [answer, setAnswer] = useState('');

// getQuestions function

const getQuestions = (category)=> {
// graphQL get request for questions

// setQuestion 
setQuestion()
setAnswer();
};
// graphQl fetch for the answer
const answerFunc = (e)=> {
  //
};

// graphQL next question function 
const nextFunc = (()=> {
setFront(false); 
});
// graphQL call next function 
const editFunc = (()=> {

});

// const ButtonNames = {'Answer': answerFunc, 'Next': nextFunc, 'Edit Question': editFunc, 'Correct': setScore};


useEffect(()=> {
  console.log(front);
  },[front])


  return (
    <>
      <div id='flashcard'>
        <h3>{front ? question : answer }</h3> 
        { front 
          ? [<button key='answer1' handleClick={answerFunc}>Answer</button>,<button key='next1' handleClick={nextFunc}>Next</button>] 
          : [<button key='edit1' handleClick={editFunc}>Edit Question</button>,
          <button key='score1' handleClick={setScore}>Correct</button>]
       }
      </div>
    </>
  ); 
};

export default Flashcard; 

/*
 {ButtonNames.map((el,i) => { 
    switch(el) {
      case 'Answer':
      <Button name={el} key={el+i} />
      break; 
      case 'Next':
      <Button name={el} key={el+i}  />
      break; 
      case 'Edit Question':
      <Button name={el} key={el+i} />
      break; 
      case 'Correct':
      <Button name={el} key={el+i} handleClick={setScore} />
      break;
      default:
        break; 
    }
  })} 
*/