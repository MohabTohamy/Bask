import { useState } from "react";
import AppointmentPage from "../Appointment";
import AddAppointmentModal from "../AddAppointmentModal/AddAppointmentModal";



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

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [lastId, setLastId] = useState(0);
  const [currentAppointment, setCurrentAppointment] = useState<Appointment | null>(null);



  const addAppointment = (newAppointment: Omit<Appointment, 'id'>) => {
    const newId = lastId + 1; // Increment the ID
    setAppointments([...appointments, { ...newAppointment, appointmentsid: newId }]);
    setLastId(newId); // Update the lastId
  };

  const updateAppointment = (updatedAppointment: Appointment) => {
    const updatedAppointments = appointments.map((appt) =>
      appt.appointmentsid === updatedAppointment.appointmentsid ? updatedAppointment : appt
    );
    setAppointments(updatedAppointments);
    setCurrentAppointment(null);
    setIsEditMode(false);
  };



  const deleteAppointment = (id: number) => {
    const updatedAppointments = appointments.filter(appt => appt.appointmentsid !== id);
    setAppointments(updatedAppointments);  // Update the state by removing the selected appointment
  };

  const editAppointment = (appointment: Appointment) => {
    setCurrentAppointment(appointment);  // Set the current appointment to be edited
    setIsEditMode(true);  // Enable edit mode
    setIsModalOpen(true);  // Open the modal
  };

  return (
    <div className="container mx-auto p-6 relative mt-20 mr-1 shadow-sm-light bg-slate-100" >
      {/* Button to open Add Appointment Modal */}
      <button
        className="bg-cyan-900 text-white py-2 px-4 rounded-lg absolute top-0 right-6 shadow-lg"
        onClick={() => {

          setIsEditMode(false);  // Reset edit mode
          setCurrentAppointment(null);  // Clear current appointment
          setIsModalOpen(true)
        }}
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
      < AppointmentPage appointments={appointments}
        deleteAppointment={deleteAppointment}  // Pass the delete function to the AppointmentPage
        editAppointment={editAppointment}  // Pass the edit function

      />

      {/* Add Appointment Modal */}
      {
        isModalOpen && (
          <AddAppointmentModal
            closeModal={() => setIsModalOpen(false)}
            addAppointment={isEditMode ? updateAppointment : addAppointment}  // Use add or update based on mode
            appointmentToEdit={currentAppointment}  // Pass the appointment to edit if any
            isEditMode={isEditMode}  // Pass the edit mode flag
          />
        )
      }
    </div >
  );
};
export default Dashboard;
