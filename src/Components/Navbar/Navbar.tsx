
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="text-white text-2xl font-bold">
                    EMR
                </NavLink>

                {/* Navigation Links */}
                <div className="space-x-4">
                    <NavLink to="/login" className="text-gray-300 hover:text-white">
                        Login
                    </NavLink>
                    <NavLink to="/register" className="text-gray-300 hover:text-white">
                        Register
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
