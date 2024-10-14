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
interface AnteriorSegment {

    Conjunctivar: string;
    Conjunctival: string;

    Sclerar: string;
    Scleral: string;


    Cornear: string;
    Corneal: string;

    KeraticPrecipitatesr: string;
    KeraticPrecipitatesl: string;

    AnteriorChamberDepthr: string;
    AnteriorChamberDepthl: string;

    CellsinAnteriorChamberr: string;
    CellsinAnteriorChamberl: string;


    FlareinAnteriorChamberr: string;
    FlareinAnteriorChamberl: string;

    AngleofAnteriorChamberr: string;
    AngleofAnteriorChamberl: string;

    PupilShaper: string;
    PupilShapel: string;

    PupilReactionr: string;
    PupilReactionl: string;

    lrisr: string;
    lrisl: string;

    Lensr: string;
    Lensl: string;

    AnteriorSegmentNotes: string;

}


interface AnteriorSegmentProps {
    appointment: Appointment;
    closeDetails: () => void;
}

const AnteriorSegment = ({ appointment, closeDetails }: AnteriorSegmentProps) => {
    const [submittedData, setSubmittedData] = useState<AnteriorSegment | null>(null); // State to store submitted data

    const formik = useFormik<AnteriorSegment>({
        initialValues: {

            Conjunctivar: "",
            Conjunctival: "",

            Sclerar: "",
            Scleral: "",

            Cornear: "",
            Corneal: "",


            KeraticPrecipitatesr: "",
            KeraticPrecipitatesl: "",


            AnteriorChamberDepthr: "",
            AnteriorChamberDepthl: "",


            CellsinAnteriorChamberr: "",
            CellsinAnteriorChamberl: "",


            FlareinAnteriorChamberr: "",
            FlareinAnteriorChamberl: "",

            AngleofAnteriorChamberr: "",
            AngleofAnteriorChamberl: "",

            PupilShaper: "",
            PupilShapel: "",

            PupilReactionr: "",
            PupilReactionl: "",

            lrisr: "",
            lrisl: "",

            Lensr: "",
            Lensl: "",

            AnteriorSegmentNotes: "",


        }
        , onSubmit: (values) => {
            setSubmittedData(values)
            console.log('Submitted values:', values);
            closeDetails(); // Close form after submission (optional)
        },
    });

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ">
            <div className="bg-white p-3 rounded-lg md:w-[1091px] sm:w-[400px] absolute right-0 top-20 h-5/6 overflow-y-auto">
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
                                <h2 className="text-2xl mb-5 font-semibold">Anterior Segment </h2>
                                <div className="flex">
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
                                                <td><h2 className="font-bold mb-2">Conjunctiva</h2></td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="Conjunctivar"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.Conjunctivar}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="Conjunctival"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.Conjunctival}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                            </tr>


                                            <tr>
                                                <td>
                                                    <h2 className="font-bold mb-2"> Sclera</h2>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="Sclerar"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.Sclerar}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="Scleral"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.Scleral}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <h2 className="font-bold mb-2"> Cornea</h2>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="Cornear"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.Cornear}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="lacrimalsysteml"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.Corneal}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="font-bold mb-2">KeraticPrecipitates</h2>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="KeraticPrecipitatesr"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.KeraticPrecipitatesr}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="KeraticPrecipitatesl"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.KeraticPrecipitatesl}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <h2 className="font-bold mb-2">AnteriorChamberDepth</h2>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="AnteriorChamberDepthr"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.AnteriorChamberDepthr}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="AnteriorChamberDepthl"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.AnteriorChamberDepthl}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />

                                                </td>
                                            </tr>


                                            <tr>
                                                <td>
                                                    <h2 className="font-bold mb-2">CellsinAnteriorChamber</h2>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="CellsinAnteriorChamberr"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.CellsinAnteriorChamberr}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="CellsinAnteriorChamberl"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.CellsinAnteriorChamberl}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="font-bold mb-2">FlareinAnteriorChamber</h2>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="FlareinAnteriorChamberr"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.FlareinAnteriorChamberr}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="FlareinAnteriorChamberl"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.FlareinAnteriorChamberl}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table>

                                        <thead>
                                            <tr className="">
                                                <th> </th>
                                                <th>OD (Right Eye)</th>
                                                <th>OD (Left Eye)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="">
                                                <td><h2 className="font-bold mb-2">AngleOfAnteriorChamber</h2></td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="AngleofAnteriorChamberr"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.AngleofAnteriorChamberr}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="AngleofAnteriorChamberl"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.AngleofAnteriorChamberl}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                            </tr>
                                            <tr className="">
                                                <td><h2 className="font-bold mb-2">PupilShape</h2></td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="PupilShaper"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.PupilShaper}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="PupilShapel"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.PupilShapel}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                            </tr> <tr className="">
                                                <td><h2 className="font-bold mb-2">PupilReaction</h2></td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="PupilReactionr"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.PupilReactionr}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="PupilReactionl"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.PupilReactionl}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                            </tr> <tr className="">
                                                <td><h2 className="font-bold mb-2">lris</h2></td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="lrisr"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.lrisr}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="lrisl"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.lrisl}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                            </tr> <tr className="">
                                                <td><h2 className="font-bold mb-2">Lens</h2></td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="Lensr"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.Lensr}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="Lensl"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.Lensl}
                                                        onChange={formik.handleChange}
                                                        className="w-20 p-1 border-2  border-orange-300 mb-4 rounded-2xl  mx-2 text-center" />
                                                </td>
                                            </tr>
                                            <tr className="">
                                                <td><h2 className="font-bold mb-2">AnteriorSegmentNotes</h2></td>
                                                <td className="">
                                                    <input
                                                        type="text"
                                                        name="AnteriorSegmentNotes"
                                                        placeholder=""
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.AnteriorSegmentNotes}
                                                        onChange={formik.handleChange}
                                                        className="w-20 mx-2 p-1 border-2  border-orange-300 mb-4 rounded-2xl  text-center" />
                                                </td>
                                            </tr>

                                        </tbody>

                                    </table>
                                </div>
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

export default AnteriorSegment;
