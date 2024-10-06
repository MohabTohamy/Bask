import moment from "moment";
import Calendar from "./Calendar";


const events = [
    {
        start: moment('2024-10-06T10:00:00').toDate(),
        end: moment('2024-10-06T11:00:00').toDate(),
        title: "MRI Registration",

    }
]

const BasicCalender = () => {
    return <Calendar events={events} className="h-dvh w-4/5 d-flex flex-col justify-center items-center
     p-10 m-auto ml-72 mt-10 bg-white shadow-2xl rounded-3xl border-2 border-gray-200"/>;


}

export default BasicCalender
