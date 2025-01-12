
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

function Navbar() {
    return (
        <>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <div>
                        <img src={logo} alt="bask" className='w-full absolute top-0 left-0' />
                    </div>
                    <ul className="space-y-2 font-medium mt-10">
                        <li>
                            <NavLink to="/Dashboard" className=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#C47D60] dark:hover:bg-gray-700 hover/edit:text-white group">

                                <span className="ms-3"> <i className="fa-solid fa-table-cells-large"></i> Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Charts" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#C47D60] dark:hover:bg-gray-700   hover/edit:text-white group">

                                <span className="flex-1 ms-3 whitespace-nowrap"> <i className="fa-solid fa-building"></i> My Units</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#C47D60] dark:hover:bg-gray-700  hover/edit:text-white  group">

                                <span className="flex-1 ms-3 whitespace-nowrap"> <i className="fa-solid fa-money-bill"></i> Payment</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#C47D60] dark:hover:bg-gray-700   hover/edit:text-white group">

                                <span className="flex-1 ms-3 whitespace-nowrap"> <i className="fa-solid fa-screwdriver-wrench"></i> Maintenace</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#C47D60] dark:hover:bg-gray-700   hover/edit:text-white group">

                                <span className="flex-1 ms-3 whitespace-nowrap"> <i className="fa-solid fa-user"></i> Profile</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#C47D60] dark:hover:bg-gray-700  hover/edit:text-white group">

                                <span className="flex-1 ms-3 whitespace-nowrap"> <i className="fa-regular fa-circle-question"></i> Help Center</span>
                            </NavLink>
                        </li>
                        <div className='absolute bottom-5 ' >
                            <li>
                                <NavLink to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#C47D60] dark:hover:bg-gray-700  hover/edit:text-white group">

                                    <span className="flex-1 ms-3 whitespace-nowrap"> <i className="fa-solid fa-gear"></i> Setting</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#C47D60] dark:hover:bg-gray-700  hover/edit:text-white group">

                                    <span className="flex-1 ms-3 whitespace-nowrap"> <i className="fa-solid fa-right-from-bracket"></i> Logout</span>

                                </NavLink>
                            </li>
                        </div>
                    </ul>
                </div>
            </aside></>
    );
};

export default Navbar;








{/* <nav className="bg-gray-800 p-4 h-screen w-60">

<div className="container mx-auto  flex items-center justify-items-center flex-col flex-wrap"> */}
{/* Logo */ }
{/* <div className='mb-20 text-center'>
    <NavLink to="/" className="text-white text-2xl font-bold">
        <img src={img1} alt="Logo" className="h-28 mt-16" />
    </NavLink>
    <h2 className='bg-slate-600 font-bold text-amber-400 p-2 rounded-3xl mt-5 '> IRRI Vision</h2>
</div> */}
{/* Navigation Links */ }
{/* <div className=" flex items-center flex-col flex-wrap">
    <NavLink to="/" className="text-gray-300 hover:text-white mb-5">
        Clinic
    </NavLink>
    <NavLink to="/" className="text-gray-300 hover:text-white mb-5">
        Patients
    </NavLink>
    <NavLink to="/appointment" className="text-gray-300 hover:text-white mb-5">
        Appointment
    </NavLink>
    <NavLink to="/" className="text-gray-300 hover:text-white mb-5">
        Finance
    </NavLink>
    <NavLink to="/" className="text-gray-300 hover:text-white">
        Billing
    </NavLink>
</div>
</div >
</nav > */}







