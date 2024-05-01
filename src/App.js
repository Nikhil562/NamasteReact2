import React from "react";
import ReactDOM from "react-dom/client";
import Header  from './components/Header' 
import Body from './components/Body'
import Footer from './components/Footer'
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
      //its a fun helps to create routing 
import About from './components/About'
import Error from './components/Error'
import Contact from "./components/Contact";

      //There are diff types of routes with there own advantage  createBrowserRouter is recomended for react projects 
const AppLayout = () => {

  return (
    <React.Fragment>
      <Header />
      <About/>  {/*If Path is  /about*/}
      <Body />    {/*If Path is  / */}   
      <Contact/>     {/*If Path is  /contact */} 
      <Footer />
    </React.Fragment>
  );
};
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children: [
      {
        path:"/about",
        element:<About/>
      },{
        path:"/contact",
        element:<Contact/>
      }
    ]
  }
]
)
// I have to make About children of AppLayout bs it should come inside Applayout  


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
 

