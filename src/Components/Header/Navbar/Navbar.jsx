
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
             <div className="">
      <nav className="flex flex-col md:flex-row justify-between items-center py-6  px-10">

       <div>
        <img className='w-60' src='https://i.ibb.co/RYSzmjR/Logo.png' alt="" />
       </div>

        <ul className="flex gap-5 font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-red-500 underline" : ""
              }
            >
              Home
            </NavLink>

          </li>

          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Donation
            </NavLink>

            
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
              }
            >
              Statistics
            </NavLink>

            
          </li>
        </ul>

      </nav>
    </div>
        </div>
    );
};

export default Navbar;