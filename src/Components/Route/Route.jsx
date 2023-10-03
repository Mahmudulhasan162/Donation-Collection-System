
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../../assets/MainLayout/MainLayout';
import Home from '../../Pages/Home/Home';
import CardDetails from '../CardDetails/CardDetails';
import Donation from '../../Pages/Donation/Donation';
import Statistics from '../../Pages/Statistics/Statistics';
import Error from '../Error/Error';


const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
     
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
           },
           {
            path: '/statistics',
            element : <Statistics></Statistics>,
            loader: () => fetch ('/data.json')
           }

        ]

    }
])

export default myCreatedRoute;