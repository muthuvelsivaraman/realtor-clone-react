import { useLocation ,useNavigate} from 'react-router-dom';
import React from 'react';



export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    function pathMatchRoute(route) {
        if (route === location.pathname) {
          return true;
        }
      }
    
    console.log("location ----->",location);  
    
    return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
        
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>            
                <img src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg" alt="logo" className="h-5"></img>
            </div>
            
            <div>
            <ul className="flex space-x-10">
                <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}
            >
              Profile </li>
          </ul>

            </div>
        </header>
            
     </div>   

  )
}
