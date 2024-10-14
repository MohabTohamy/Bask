import React, { useEffect, useState } from "react";

interface Appointment {
    appointmentsid: number;
    doctor: string;
    name: string;
    phone: string;
    reason: string;
    reasontext: string;
    age: number;
    gender: string;
    date: string;
    etime: string;
    ltime: string;
    status: string;
    billing: number;
}


interface AddAppointmentModalProps {
    closeModal: () => void;
    addAppointment: (appt: Appointment) => void;
    appointmentToEdit?: Appointment | null;
    isEditMode?: boolean;
}

const AddAppointmentModal = ({ closeModal, addAppointment, appointmentToEdit, isEditMode = false, }: AddAppointmentModalProps) => {
    const [newAppointment, setNewAppointment] = useState<Appointment>({
        appointmentsid: 0,
        doctor: "",
        name: "",
        phone: "",
        reason: "",
        reasontext: "",
        age: 0,
        gender: "",
        date: "",
        etime: "",
        ltime: "",
        status: "Scheduled",
        billing: 0,

    });

    useEffect(() => {
        if (isEditMode && appointmentToEdit) {
            setNewAppointment(appointmentToEdit);
        }
    }, [isEditMode, appointmentToEdit]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setNewAppointment({
            ...newAppointment,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        addAppointment(newAppointment);
        closeModal();
    };

    return (

        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-3 rounded-lg h-5/6 md:w-[768px] sm:w-[400px] overflow-y-auto absolute right-0 top-20 ">
                <div className="border-4 border-orange-300 rounded-lg p-5 xl:md:h-full">
                    <div onClick={closeModal} className="cursor-pointer"><i className="fa-solid fa-chevron-right text-4xl text-cyan-900"></i></div>
                    <h2 className="text-2xl font-semibold mb-4">{isEditMode ? "Edit Appointment" : "Add Appointment"}</h2>
                    {/* <input
                    type="text"
                    name="appointmentsid"
                    placeholder="appointmentsid"
                    value={newAppointment.appointmentsid}
                    onChange={handleChange}
                    className="w-full p-2 border mb-4"
                /> */}
                    <div className="flex flex-wrap flex-col">

                        <div className=" flex justify-around">
                            <div>
                                <h2 className="font-bold mb-2">Doctor Name</h2>
                                <input
                                    type="text"
                                    name="doctor"
                                    placeholder="Doctor"
                                    value={newAppointment.doctor}
                                    onChange={handleChange}
                                    className="w-40 p-1 border-2  border-orange-300 mb-4 rounded-2xl text-center" />
                            </div>

                            <div>
                                <h2 className="font-bold mb-2">Date</h2>
                                <input
                                    type="date"
                                    name="date"
                                    value={newAppointment.date}
                                    onChange={handleChange}
                                    className="w-40 p-1 border-2 border-orange-300 mb-4 rounded-2xl text-center"
                                />
                            </div>

                        </div>
                        <div className=" flex justify-around">

                            <div>
                                <h2 className="font-bold mb-2">Patient Name</h2>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Patient Name"
                                    value={newAppointment.name}
                                    onChange={handleChange}
                                    className="w-40 p-1 border-2  border-orange-300 mb-4 rounded-2xl text-center"
                                />
                            </div>
                            <div>
                                <h2 className="font-bold mb-2">Reason</h2>
                                <input
                                    type="text"
                                    name="reason"
                                    placeholder="Reason"
                                    value={newAppointment.reason}
                                    onChange={handleChange}
                                    className="w-40 p-1 border-2  border-orange-300 mb-4 rounded-2xl text-center"
                                />
                            </div>
                        </div>
                    </div>


                    {/* <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={newAppointment.phone}
                        onChange={handleChange}
                        className="w-full p-2 border mb-4"
                    /> */}
                    <div className="">
                        <h2 className="text-center font-bold mb-2">Duration</h2>
                        <div className="flex flex-wrap justify-around">

                            <div className="">
                                <h2 className="font-bold mb-2">From:</h2>
                                <input
                                    type="time"
                                    name="etime"
                                    value={newAppointment.etime}
                                    onChange={handleChange}
                                    className="w-40 p-1 border-2  border-orange-300 mb-4 rounded-2xl text-center"
                                />
                            </div>
                            <div className="">
                                <h2 className="font-bold mb-2">To:</h2>
                                <input
                                    type="time"
                                    name="ltime"
                                    value={newAppointment.ltime}
                                    onChange={handleChange}
                                    className="w-40 p-1 border-2  border-orange-300 mb-4 rounded-2xl text-center"
                                />
                            </div>
                        </div>
                    </div>
                    {/* <select
                        name="gender"
                        value={newAppointment.gender}
                        onChange={handleChange}
                        className="w-full p-2 border mb-4"
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select> */}
                    <div className="mt-4">
                        <h2 className="font-bold text-center">Status:</h2>
                        <div className="flex justify-around">

                            <select
                                name="status"
                                value={newAppointment.status}
                                onChange={handleChange}
                                className="w-60 p-1 mb-4 mt-1 border-2  border-orange-300 rounded-2xl text-center"
                            >
                                <option value="Scheduled">Scheduled</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>

                    {/* <input
                        type="text"
                        name="billing"
                        value={newAppointment.billing}
                        onChange={handleChange}
                        className="w-full p-2 border mb-4"
                    /> */}
                    <div>

                        {/* <h2 className="font-bold mb-2">Reason</h2>
                        <input
                            type="text-area"
                            name="reasontext"
                            placeholder="Reason"
                            value={newAppointment.reasontext}
                            onChange={handleChange}
                            className="block p-2.5 w-full h-32 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        /> */}


                        <label htmlFor="Reason" className="block mb-2 font-bold text-gray-900 dark:text-white">Reason For Appointment</label>
                        <textarea id="reasontext" className="block p-2.5 w-full h-32 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write here..."></textarea>

                    </div>

                    <div className="flex justify-between  mt-4 flex-nowrap flex-col-reverse sm:flex-row">
                        <button
                            className="bg-white text-black py-2 px-4 rounded-lg border border-cyan-950"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-cyan-900 text-white py-2 px-4 rounded-lg"
                            onClick={handleSubmit}
                        >
                            {isEditMode ? "Update Appointment" : "Add Appointment"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAppointmentModal;
