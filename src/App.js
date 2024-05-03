import React from 'react'
import { lazy } from 'react';
import { Suspense } from 'react';
import ReactDOM from "react-dom/client";
import Header  from './components/Header' 
import Body from './components/Body'
import Footer from './components/Footer'
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import About from './components/About'
import Error from './components/Error'
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from './components/Profile'
import Shimmer from './components/Shimmer.js';
// import Instamart from './components/Instamart' Not like this 

const Instamart = lazy(()=>{
  import('./components/Instamart.js')
});

const AppLayout = () => {

  return (
    <React.Fragment> 
      <Header />
       <Outlet/>
      <Footer />
    </React.Fragment>
  );
};
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
      path:'/about',
      element:<About/>,
      children:[
        {
          path:'profile',
          element:<Profile/>

        }
      ]
      },
      // Still http://localhost:1234/about/profile is not giving desired results bs childrens are always rendered inside an outlet 
      // outlet should always be created inside parent  so create inside About 
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>
      },{
        path:"/contact",
        element:<Contact/>
      },{
        path:'/restaurant/:id',  //Dynamic routing 
        element:<RestaurantMenu/>
      },
      {
        path:'/instamart',  //Dynamic routing 
        element:(
          <Suspense fallback={<Shimmer/>}>
             <Instamart/>
          </Suspense>
          // Now react waits for it 
          // When there is a suspence then what will be loaded so it takes a prop : fallback u can check it using slow 3g 
        )
      }
    ]
  }
]
)


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
 

