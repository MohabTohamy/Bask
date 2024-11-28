import { useState } from "react";
import Appendages from "./Appendages";
import AnteriorSegment from "./AnteriorSegment";
import PosteriorSegment from "./PosteriorSegment";
import CranialNerves from "./CranialNerves";

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


interface AppointmentDetailsProps {
    appointment: Appointment;
    closeDetails: () => void;
}

const AppointmentDetails = ({ appointment, closeDetails }: AppointmentDetailsProps) => {
    const examComponents = [Appendages, AnteriorSegment, PosteriorSegment, CranialNerves];
    const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
    const [selectedAppendages, setSelectedAppendages] = useState<Appointment | null>(null);
    const [selectedAnterior, setSelectedAnterior] = useState<Appointment | null>(null);
    const [selectedPosterior, setSelectedPosterior] = useState<Appointment | null>(null);
    const [selectedCranialNerves, setSelectedCranialNerves] = useState<Appointment | null>(null);

    const handleNext = () => {
        setCurrentComponentIndex((prevIndex) => prevIndex + 1);
        if (currentComponentIndex === examComponents.length - 1) {
            closeDetails();
        }
    }

    const handlePrevious = () => {
        setCurrentComponentIndex((prevIndex) => prevIndex - 1);
        if (currentComponentIndex === 0) {
            closeDetails();
        }
    }

    const CurrentComponent = examComponents[currentComponentIndex];




    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ">
            <div className="bg-white p-3 rounded-lg md:w-[768px] sm:w-[400px] absolute right-0 top-20 h-5/6 overflow-y-auto">
                <div className="border-4 border-orange-300 rounded-lg p-5  3xl:md:h-full">
                    <div onClick={closeDetails} className="cursor-pointer"><i className="fa-solid fa-chevron-right text-4xl text-cyan-900"></i></div>
                    <h2 className="text-2xl font-semibold mb-4">Appointment Details #{appointment.appointmentsid}</h2>
                    <div className="bg-slate-200 p-4 rounded-lg flex justify-around mb-10 shadow-lg">
                        <div className="">
                            <div className="mb-4 text-xl">
                                <strong>Patient Name: {appointment.name} #{appointment.appointmentsid}</strong>
                            </div>
                            <div className="">
                                <strong>Phone:</strong> {appointment.phone}
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <strong>Status:</strong> {appointment.status}
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-nowrap justify-around overflow-auto">
                        <div>
                            <div className="flex justify-start mb-10 flex-col h-42">
                                <div className="flex">
                                    <div className="bg-orange-300 w-3 h-20 border rounded-lg mr-1"> </div>
                                    <div className="">
                                        <h2 className="font-bold"> Date and Time</h2>
                                        <div className="px-2">
                                            {appointment.date}
                                        </div>
                                        <div className="flex ">
                                            <div className=" px-2 ">
                                                <h6>From: {appointment.etime}</h6>
                                            </div>
                                            <div className="px-2">
                                                <h6>To: {appointment.ltime}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" flex justify-start mb-10 flex-col h-42">
                                <div className="flex">
                                    <div className="bg-orange-300 w-3 h-20 border rounded-lg mr-1"> </div>
                                    <div>
                                        <h2 className="font-bold">Doctor</h2>
                                        <div className="mb-4  px-2 rounded-lg">
                                            {appointment.doctor}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl mb-5 font-semibold">General Information</h2>
                        <div className="p-4 rounded-lg flex justify-around mb-10">
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
                                    <strong>Emergency Contact Name:</strong>
                                </div>
                                <div className="">
                                    <strong>Emergency Contact Number:</strong>
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
                        <button className="bg-transparent  py-2 px-4" onClick={() => setSelectedAppendages(appointment)}>
                            <i className="fa-solid fa-caret-right text-5xl text-cyan-950"></i>
                        </button>
                        <button className="bg-gray-200 text-black  shadow-2xl py-2 px-4 rounded-lg" onClick={() => setSelectedAnterior(appointment)}>
                            Anterior Segment
                        </button>
                        <button className="bg-gray-200 text-black  shadow-2xl py-2 px-4 rounded-lg" onClick={() => setSelectedPosterior(appointment)}>
                            Posterior Segment
                        </button>
                        <button className="bg-gray-200 text-black  shadow-2xl py-2 px-4 rounded-lg" onClick={() => setSelectedCranialNerves(appointment)}>
                            Cranial Nerves
                        </button>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between">
                            <button
                                onClick={handlePrevious}
                                disabled={currentComponentIndex === 0}
                                className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-300"
                            >
                                Previous
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentComponentIndex === examComponents.length - 1}
                                className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-300"
                            >
                                Next
                            </button>

                        </div>
                    </div>
                </div>

                {/* Show Appendages */}
                {selectedAppendages && (
                    <Appendages
                        appointment={selectedAppendages}
                        closeDetails={() => setSelectedAppendages(null)}
                    />
                )}


                {/* Show Anterior Segment */}
                {selectedAnterior && (
                    <AnteriorSegment
                        appointment={selectedAnterior}
                        closeDetails={() => setSelectedAnterior(null)}
                    />
                )}
                {/* Show posterior Segment */}
                {selectedPosterior && (
                    <PosteriorSegment
                        appointment={selectedPosterior}
                        closeDetails={() => setSelectedPosterior(null)}
                    />
                )}
                {/* Show Cranial Nerves */}
                {selectedCranialNerves && (
                    <CranialNerves
                        appointment={selectedCranialNerves}
                        closeDetails={() => setSelectedCranialNerves(null)}
                    />
                )}
            </div>
        </div>
    );
};

export default AppointmentDetails;
