import React from "react";
import ReactDOM from "react-dom/client";
import Header  from './components/Header' 
import Body from './components/Body'
import Footer from './components/Footer'
      
const AppLayout = () => {
  /*  
   # Never Ever :- 

   const Food=()=>{
  create a component inside component

  Write a useState inside if else  it leads to inconsistency 
  also not inside for loop 

  Usestate is a hook which react gives us to create local variables inside functional components 
  so never use it outside functional component 
  */
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)
 