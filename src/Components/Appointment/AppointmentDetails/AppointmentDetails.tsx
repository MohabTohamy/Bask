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

interface AppointmentDetailsProps {
    appointment: Appointment;
    closeDetails: () => void;
}

const AppointmentDetails = ({ appointment, closeDetails }: AppointmentDetailsProps) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ">
            <div className="bg-white p-3 rounded-lg w-[768px] absolute right-0 top-20 h-5/6 overflow-y-auto">
                <div className="border-4 border-orange-300 rounded-lg p-5 h-full">
                    <div onClick={closeDetails} className="cursor-pointer"><i className="fa-solid fa-chevron-right text-4xl text-cyan-900"></i></div>
                    <h2 className="text-2xl font-semibold mb-4">Appointment Details #{appointment.appointmentsid}</h2>
                    <div className="bg-slate-200 p-4 rounded-lg flex justify-around mb-10">
                        <div className="">
                            <div className="mb-4 text-xl">
                                <strong className="">Patient Name:</strong> {appointment.name} #{appointment.appointmentsid}
                            </div>
                            <div className="">
                                <strong>Phone:</strong> {appointment.phone}
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <strong>Status:</strong> {appointment.status}
                            </div>
                            <div className="">
                                <strong>Doctor:</strong> {appointment.doctor}
                            </div>
                        </div>
                    </div>


                    <div className=" p-4 rounded-lg flex justify-around mb-10 flex-col items-center">
                        <div className="mb-4 border border-gray-300 p-2 rounded-lg">
                            <strong>Date:</strong> {appointment.date}
                        </div>
                        <div className="flex flex-row  ">
                            <div className=" border border-gray-300 p-2 rounded-lg">
                                <strong>From:</strong> {appointment.etime}
                            </div>
                            <div className=" border border-gray-300 p-2 rounded-lg">
                                <strong>To:</strong> {appointment.ltime}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl mb-5 font-semibold">General Information</h2>
                        <div className="p-4 border border-gray-300 rounded-lg flex justify-around mb-10">
                            <div>
                                <div className="mb-4">
                                    <strong>Age:</strong> {appointment.age}
                                </div>
                                <div className="">
                                    <strong>Gender:</strong> {appointment.gender}
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <strong>Emergency Contact Name: </strong>
                                </div>
                                <div className="">
                                    <strong>Emergency Contact Number: </strong>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">Last Examination</h2>
                            <div>Examination </div>
                        </div>
                    </div>

                    <div className="flex justify-around mt-4 ">
                        <button className="bg-gray-200 text-black  shadow-2xl py-2 px-4 rounded-lg" onClick={closeDetails}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentDetails;
