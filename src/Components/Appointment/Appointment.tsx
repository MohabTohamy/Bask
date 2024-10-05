


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
}


const AppointmentPage = ({ appointments }: AppointmentPageProps) => {
    return (
        <div className="mt-6 rounded-lg shadow-lg">
            <table className="min-w-full bg-white border- shadow-lg rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-gray-300 border shadow-sm">
                        <th className="py-2 px-4 border-y">Appointments ID</th>
                        <th className="py-2 px-4 border-y">Doctor</th>
                        <th className="py-2 px-4 border-y">Patient Name</th>
                        <th className="py-2 px-4 border-y">Phone</th>
                        <th className="py-2 px-4 border-y">Reason</th>
                        <th className="py-2 px-4 border-y">Date</th>
                        <th className="py-2 px-4 border-y">Entering Time</th>
                        <th className="py-2 px-4 border-y">Leaving Time</th>
                        <th className="py-2 px-4 border-y">Status</th>
                        <th className="py-2 px-4 border-y">Billing</th>

                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appt, index) => (
                        <tr key={index} className="hover:bg-gray-100 text-center">
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
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default AppointmentPage;
