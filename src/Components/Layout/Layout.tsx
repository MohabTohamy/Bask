
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


function Layout() {
    return (
        <div className="min-h-screen flex ">
            {/* Navbar */}
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-grow p-6 bg-gray-100">
                <Outlet />
            </main>

            {/* Footer (Optional) */}
            {/* <footer className="bg-gray-800 text-white text-center p-4">
                <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
            </footer> */}
        </div>
    );
};

export default Layout;
