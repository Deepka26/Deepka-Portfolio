import {FaBars,FaTimes} from "react-icons/fa"
import { useState } from "react";

const Navbar=()=>{
const [nav,setNav]=useState(false);
    return (
        <div className="flex px-5 justify-between items-center bg-black text-white w-full pt-3 fixed h-15 pb-3">
            <div>
                <h1 className="text-5xl font-signature ml-2">Deepka</h1>
            </div>
            <ul className="hidden md:flex space-x-12 mr-16 cursor-pointer ">
                <li className="hover:scale-110 duration-150">Home</li>
                <li className="hover:scale-110 duration-150">About</li>
                <li className="hover:scale-110 duration-150">Contact</li>
            </ul>
            <div className="cursor-pointer z-10 mr-4 text-white text-2xl md:hidden" onClick={()=>{setNav(!nav)}}>
             {(nav)? <FaTimes/> :<FaBars/>}
            </div>
            {
                (nav) && <ul className="flex flex-col justify-center items-center absolute
                top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 cursor-pointer space-y-7">
                    <li className="">Home</li>
                    <li>About</li>
                    <li>Contact</li> 
                    
                </ul> 
            }
              
        </div>
    )
}
export default Navbar;