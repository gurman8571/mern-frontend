import './App.css';
import Form from './Components/Add'
import Index from './Components/Index'
import {createBrowserRouter, createRoutesFromElements,Route,Outlet, RouterProvider} from 'react-router-dom'
 function App() {
const router=createBrowserRouter([{
  path:'/',
  element: <Form/>,
},{

  path:'/index',
  element: <Index/>,
}]
 
)
  return (
    <>
  
    <div className=''>

      <RouterProvider router={router}/>
      
    </div>
    </>
  );
}

export default App;
