 
import Subcategory from './Subcategory';


const Header = ({ setCategory, category })=> {
  const categories = ['Javascript', 'React', 'Frontend', 'Backend'];
  const categoryClick = (el)=> {
    //if you click the category once it will be added to category array, if you click the same category twice it will be removed from the category array
    setCategory(prev=> prev.includes(el) ? prev.filter(category => category !== el) : prev.concat(el));
  };

  const getQuestions = (category)=> {
    ; 
    fetch('/api/'+ category.join('-'))
      .then()

  }

  return (
    <>
      <h1>Interview Questions Flashcards</h1> 
      <div>score</div>
      <div>Edit Categories</div>
      {categories.map(el => <Subcategory key={el} el={el} categoryClick={categoryClick} />)}
      <button onClick={()=> getQuestions(category)} >Get Questions</button>
    </>
  );
}

export default Header; 