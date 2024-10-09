import React, { useEffect, useState } from "react";

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
            <div className="bg-white p-6 rounded-lg w-96 absolute right-0 top-0 h-full overflow-y-auto">
                <h2 className="text-2xl font-semibold mb-4">{isEditMode ? "Edit Appointment" : "Add New Appointment"}</h2>
                {/* <input
                    type="text"
                    name="appointmentsid"
                    placeholder="appointmentsid"
                    value={newAppointment.appointmentsid}
                    onChange={handleChange}
                    className="w-full p-2 border mb-4"
                /> */}
                <input
                    type="text"
                    name="doctor"
                    placeholder="Doctor"
                    value={newAppointment.doctor}
                    onChange={handleChange}
                    className="w-full p-2 border mb-4"
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Patient Name"
                    value={newAppointment.name}
                    onChange={handleChange}
                    className="w-full p-2 border mb-4"
                />


                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={newAppointment.phone}
                    onChange={handleChange}
                    className="w-full p-2 border mb-4"
                />
                <input
                    type="text"
                    name="reason"
                    placeholder="Reason"
                    value={newAppointment.reason}
                    onChange={handleChange}
                    className="w-full p-2 border mb-4"
                />

                <input
                    type="date"
                    name="date"
                    value={newAppointment.date}
                    onChange={handleChange}
                    className="w-full p-2 border mb-4"
                />
                <input
                    type="time"
                    name="etime"
                    value={newAppointment.etime}
                    onChange={handleChange}
                    className="w-full p-2 border mb-4"
                />
                <input
                    type="time"
                    name="ltime"
                    value={newAppointment.ltime}
                    onChange={handleChange}
                    className="w-full p-2 border mb-4"
                />
                <select
                    name="gender"
                    value={newAppointment.gender}
                    onChange={handleChange}
                    className="w-full p-2 border mb-4"
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <select
                    name="status"
                    value={newAppointment.status}
                    onChange={handleChange}
                    className="w-full p-2 border mb-4"
                >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                </select>

                <input
                    type="text"
                    name="billing"
                    value={newAppointment.billing}
                    onChange={handleChange}
                    className="w-full p-2 border mb-4"
                />
                <div className="flex justify-between mt-4">
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
    );
};

export default AddAppointmentModal;
