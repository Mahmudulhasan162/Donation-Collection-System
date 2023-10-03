import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div  className=" max-w-[300px] md:max-w-[600px] lg:max-w-[1200px]  mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;