import React, {useEffect, useState} from 'react';
import {getAllCards} from '../queries';
import { useQuery } from '@apollo/client'; 

const Flashcard = ({ category, setScore })=> { 
  const [ front, setFront ] = useState(true); 
  const [question, setQuestion]= useState('');
  const [answer, setAnswer] = useState('');

  useEffect(()=> {
    console.log(front);
    },[front])

  const { loading, error, data } = useQuery(getAllCards, { variables: { language: 'english'}})
  if (loading) return 'loading...';

  if (error) return `ERROR! ${error.message}`;

  

// getQuestions function

// const getQuestions = (category)=> {
// // graphQL get request for questions

// // setQuestion 
// setQuestion()
// setAnswer();
// };
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





  return (
    <>
      <div id='flashcard'>
        {data?.getAllCards?.map(el => <h1 key={el.id}>{el.question}</h1>)}
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