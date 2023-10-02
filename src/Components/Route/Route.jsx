
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../../assets/MainLayout/MainLayout';
import Home from '../../Pages/Home/Home';
import CardDetails from '../CardDetails/CardDetails';
import Donation from '../../Pages/Donation/Donation';


const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout>,
     
        children : [
           {
            path : "/",
            element : <Home></Home>,
            loader: () => fetch ('/data.json')
           },
           {
            path: "/cards/:id",
            element: <CardDetails></CardDetails>,
            loader: () => fetch ('/data.json')
           },
           {
            path: '/donation',
            element: <Donation></Donation>
           }

        ]

    }
])

export default myCreatedRoute;