import { useState } from "react";
import AppointmentPage from "../Appointment";
import AddAppointmentModal from "../AddAppointmentModal/AddAppointmentModal";



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

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Function to add a new appointment
  const addAppointment = (newAppointment: Appointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <div className="container mx-auto p-6 relative mt-20 mr-1 shadow-sm-light bg-slate-100" >
      {/* Button to open Add Appointment Modal */}
      <button
        className="bg-cyan-900 text-white py-2 px-4 rounded-lg absolute top-0 right-6 shadow-lg"
        onClick={() => setIsModalOpen(true)}
      >
        Add Appointment
      </button >
      {/* Button to open Export Modal */}
      <button
        className="bg-white text-cyan-900 py-2 px-4 rounded-lg absolute top-0 right-52 shadow-lg"
      >
        <i className="fa-solid fa-file-export"></i> Export
      </button >


      {/* Appointment List */}
      < AppointmentPage appointments={appointments} />

      {/* Add Appointment Modal */}
      {
        isModalOpen && (
          <AddAppointmentModal
            closeModal={() => setIsModalOpen(false)}
            addAppointment={addAppointment}
          />
        )
      }
    </div >
  );
};

export default Dashboard;
