

const Subcategory = ({categoryClick, el})=> {
  return (<div onClick={()=> categoryClick(el)}>{el}</div> ); 
};

export default Subcategory; 