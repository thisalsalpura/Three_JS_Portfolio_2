import { React } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to="/" className="w-20 h-10 rounded-lg bg-white flex items-center justify-center">
                <p className="blue-gradient_text font-bold">THISAL</p>
            </NavLink>
            <nav className="flex text-lg gap-7">
                <NavLink to="/about" className={({ isActive }) => isActive ? 'blue-gradient_text font-semibold' : 'text-black-500 font-semibold'}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'blue-gradient_text font-semibold' : 'text-black-500 font-semibold'}>
                    Projects
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar;
