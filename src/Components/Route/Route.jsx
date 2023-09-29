
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../../assets/MainLayout/MainLayout';
import Home from '../../Pages/Home/Home';


const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout>,
     
        children : [
           {
            path : "/",
            element : <Home></Home>,
            loader: () => fetch ('/data.json')
           }

        ]

    }
])

export default myCreatedRoute;