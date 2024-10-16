import { useFormik } from "formik";
import { useState } from "react";

interface Appointment {
    appointmentsid: number;
    doctor: string;
    name: string;
    phone: string;
    date: string;
    etime: string;
    ltime: string;
    status: string;

}
interface CranialNerves {


    // cranialnerveiii    cranialNerveiv cranialnervevi  cranialnervevii
    cranialnerveiiir: string;
    cranialnerveiiil: string;

    cranialNerveivr: string;
    cranialNerveivl: string;

    cranialnervevir: string;
    cranialnervevil: string;

    cranialnerveviir: string;
    cranialnerveviil: string;

    notes: string;

}


interface CranialNervesProps {
    appointment: Appointment;

    closeDetails: () => void;
}

const CranialNerves = ({ appointment, closeDetails, }: CranialNervesProps) => {
    const [submittedData, setSubmittedData] = useState<CranialNerves | null>(null); // State to store submitted data


    const formik = useFormik<CranialNerves>({
        initialValues: {

            cranialnerveiiir: "",
            cranialnerveiiil: "",

            cranialNerveivr: "",
            cranialNerveivl: "",

            cranialnervevir: "",
            cranialnervevil: "",


            cranialnerveviir: "",
            cranialnerveviil: "",

            notes: "",

        }
        , onSubmit: (values) => {
            setSubmittedData(values)
            console.log('Submitted values:', values);
            closeDetails(); // Close form after submission (optional)
        },
    });

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ">
            <div className="bg-white p-3 rounded-lg md:w-[768px] sm:w-[400px] absolute right-0 top-20 h-5/6 overflow-y-auto">
                <div className="border-4 border-orange-300 rounded-lg p-5  3xl:md:h-full">
                    <div onClick={closeDetails} className="cursor-pointer"><i className="fa-solid fa-chevron-right text-4xl text-cyan-900"></i></div>
                    <h2 className="text-2xl font-semibold mb-4">Examination #{appointment.appointmentsid}</h2>
                    <div className="bg-gray-200 p-4 rounded-lg flex justify-around mb-10 shadow-lg border-2 flex-col">
                        <div className="">
                            <div className="mb-4  flex justify-between">
                                <div className="text-xl font-bold">Patient Name: {appointment.name} #{appointment.appointmentsid}</div>
                                <div className="mb-4">
                                    <strong>Status:</strong> {appointment.status}
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <strong>Phone:</strong> {appointment.phone}
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
                            <div>
                                <div className="flex justify-start mb-10 flex-col h-42">
                                    <div className="flex ">
                                        <div className="bg-orange-300 w-3 h-20 border rounded-lg mr-1"> </div>
                                        <div>
                                            <h2 className="font-bold"> Next Visit</h2>
                                            <div className="  px-2">
                                                20/10/2024
                                            </div>
                                            <div className="flex flex-row  ">
                                                <div className=" px-2">
                                                    <h6>From:10:10am</h6>
                                                </div>
                                                <div className="  px-2">
                                                    <h6>To:10:10am</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="bg-gray-200 p-4 rounded-lg flex justify-around mb-10 shadow-lg border-2">
                            <div>
                                <h2 className="text-2xl mb-5 font-semibold">Cranial Nerves</h2>
                                <table className="table-auto">
                                    <thead>
                                        <tr className="">
                                            <th> </th>
                                            <th>OD (Right Eye)</th>
                                            <th>OD (Left Eye)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="">
                                            <td><h2 className="font-bold mb-2">Cranial Nerve III</h2></td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="cranialnerveiiir"
                                                    placeholder=""
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.cranialnerveiiir}
                                                    onChange={formik.handleChange}
                                                    className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-20 text-center" />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="cranialnerveiiil"
                                                    placeholder=""
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.cranialnerveiiil}
                                                    onChange={formik.handleChange}
                                                    className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-20 text-center" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="font-bold mb-2"> Cranial Nerve IV</h2>
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="cranialNerveivr"
                                                    placeholder=""
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.cranialNerveivr}
                                                    onChange={formik.handleChange}
                                                    className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-20 text-center" />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="cranialNerveivl"
                                                    placeholder=""
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.cranialNerveivl}
                                                    onChange={formik.handleChange}
                                                    className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-20 text-center" />
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <h2 className="font-bold mb-2">Cranial Nerve VI</h2>
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="cranialnervevir"
                                                    placeholder=""
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.cranialnervevir}
                                                    onChange={formik.handleChange}
                                                    className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-20 text-center" />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="cranialnervevil"
                                                    placeholder=""
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.cranialnervevil}
                                                    onChange={formik.handleChange}
                                                    className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-20 text-center" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="font-bold mb-2">Cranial Nerve VII</h2>
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="cranialnerveviir"
                                                    placeholder=""
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.cranialnerveviir}
                                                    onChange={formik.handleChange}
                                                    className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-20 text-center" />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="cranialnerveviil"
                                                    placeholder=""
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.cranialnerveviil}
                                                    onChange={formik.handleChange}
                                                    className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-20 text-center" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 className="font-bold mb-2">Notes</h2>
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="notes"
                                                    placeholder=""
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.notes}
                                                    onChange={formik.handleChange}
                                                    className="w-full p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-5 text-center" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="flex justify-around mt-4 ">
                            <button className="bg-gray-200 text-black  shadow-2xl py-2 px-4 rounded-lg" onClick={closeDetails}>
                                Close
                            </button>

                            <button
                                className="bg-gray-200 text-black  shadow-2xl py-2 px-4 rounded-lg"
                                type="submit">
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CranialNerves;
