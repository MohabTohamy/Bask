import { useState } from "react";
import { debounce } from "lodash";
import { useFormik } from "formik";
import AppointmentDetails from "./AppointmentDetails/AppointmentDetails";


interface Appointment {
    appointmentsid: number;
    doctor: string;
    name: string;
    phone: string;
    reason: string;
    age: number;
    gender: string;
    date: string;
    etime: string;
    ltime: string;
    status: string;
    billing: number;
}

interface AppointmentPageProps {
    appointments: Appointment[];
    deleteAppointment: (id: number) => void;
    editAppointment: (appointment: Appointment) => void;  // Add an edit function prop
}


const AppointmentPage = ({ appointments, deleteAppointment, editAppointment }: AppointmentPageProps) => {

    const [currentPage, setCurrentPage] = useState(1);
    const appointmentsPerPage = 7; // Number of appointments per page

    const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

    const [searchQuery, setSearchQuery] = useState("");
    console.log(searchQuery);
    const updateQuery = (e: { target: { value: any; }; }) => setSearchQuery(e.target.value);
    const debouncedOnChange = debounce(updateQuery, 300);

    // Filter appointments based on search term
    const filteredAppointments = appointments.filter((appt) => {
        return (
            appt.name.toLowerCase() === '' ?
                appt : appt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                appt.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                appt.phone.includes(searchQuery)
        );
    });





    // Calculate the appointments to display on the current page
    const indexOfLastAppointment = currentPage * appointmentsPerPage;
    const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
    const currentAppointments = filteredAppointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

    const totalPages = Math.ceil(filteredAppointments.length / appointmentsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };





    const formik = useFormik({
        initialValues: {
            search: "",
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    // function handleDelete(id: number) {
    //     const newList = appointments.filter((appt) => appt.appointmentsid !== id)
    //     // setAppointments(newList)
    // }

    return (

        <div className="mt-6 rounded-lg  relative">

            <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." onChange={debouncedOnChange} required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-cyan-900 hover:bg-cyan-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <table className="min-w-full bg-white border- shadow-lg rounded-lg overflow-hidden mt-5">
                <thead>
                    <tr className="bg-gray-300 border shadow-sm">
                        <th className="py-2 px-4 border-y">Appointments ID</th>
                        <th className="py-2 px-4 border-y">Doctor</th>
                        <th className="py-2 px-4 border-y">Patient Name</th>
                        <th className="py-2 px-4 border-y">Reason</th>
                        <th className="py-2 px-4 border-y">Phone</th>
                        <th className="py-2 px-4 border-y">Date</th>
                        <th className="py-2 px-4 border-y">Entering Time</th>
                        <th className="py-2 px-4 border-y">Leaving Time</th>
                        <th className="py-2 px-4 border-y">Status</th>
                        <th className="py-2 px-4 border-y">Billing</th>
                        <th className="py-2 px-4 border-y"></th>
                    </tr>
                </thead>
                <tbody>
                    {currentAppointments.length > 0 ? (
                        currentAppointments.map((appt, index) => (
                            <tr key={index} className="hover:bg-gray-100 text-center" onClick={() => setSelectedAppointment(appt)}>
                                <td className="py-2 px-4 border-y">{appt.appointmentsid}</td>
                                <td className="py-2 px-4 border-y">{appt.doctor}</td>
                                <td className="py-2 px-4 border-y">{appt.name}</td>
                                <td className="py-2 px-4 border-y">{appt.reason}</td>
                                <td className="py-2 px-4 border-y">{appt.phone}</td>
                                <td className="py-2 px-4 border-y">{appt.date}</td>
                                <td className="py-2 px-4 border-y">{appt.etime}</td>
                                <td className="py-2 px-4 border-y">{appt.ltime}</td>
                                <td className="py-2 px-4 border-y">{appt.status}</td>
                                <td className="py-2 px-4 border-y">{appt.billing}</td>

                                {/* // Trigger the delete function */}
                                <button type="button" className="py-2 px-4"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteAppointment(appt.appointmentsid);
                                    }} >
                                    <i className="fa-solid fa-trash-can"></i>

                                </button>

                                {/* // Open the edit modal */}


                                <button type="button" className="py-2 px-4"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        editAppointment(appt);
                                    }} >
                                    <i className="fa-solid fa-pen"></i></button>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={9} className="text-center py-4">
                                No appointments found
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-10">
                <button
                    className="bg-gray-300 py-1 px-3 shadow-lg rounded-md mr-2 right-14 bottom-0 absolute  "
                    onClick={prevPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                <button
                    className="bg-cyan-900  text-white shadow-lg rounded-md py-1 px-3  ml-2 right-0 bottom-0 absolute "
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>

                <span className="px-2 py-1 absolute left-0 bottom-0">
                    Page {currentPage} of {totalPages}
                </span>
            </div>

            {/* Show Appointment Details */}
            {selectedAppointment && (
                <AppointmentDetails
                    appointment={selectedAppointment}
                    closeDetails={() => setSelectedAppointment(null)}
                />
            )}


        </div>
    );
};

export default AppointmentPage;
