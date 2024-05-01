import React from "react";
import ReactDOM from "react-dom/client";
import Header  from './components/Header' 
import Body from './components/Body'
import Footer from './components/Footer'
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
      //its a fun helps to create routing 
import About from './components/About'
import Error from './components/Error'

      //There are diff types of routes with there own advantage  createBrowserRouter is recomended for react projects 
const AppLayout = () => {

  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>
  },{
    path:"/about",
    element:<About/>
  }
]
)


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
 