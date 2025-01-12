import { Doughnut } from "react-chartjs-2";
import Charts from "../Charts/Charts";

function Dashboard() {
    return (
        <div className="p-4 bg-gray-50 min-h-screen">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-5 text-center sm:text-left">Dashboard</h1>

                {/* Main Chart and Cards */}
                <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                    {/* Chart Section */}
                    <div className="flex-1 p-4 bg-white shadow-md rounded-lg">
                        <h2 className="text-lg font-semibold mb-4 text-center sm:text-left">Total Earning</h2>
                        <Charts />
                    </div>

                    {/* Right Sidebar */}
                    <div className="flex flex-col gap-6 min-w-[300px] lg:min-w-[350px]">
                        {/* Total Booking Card */}
                        <div className="p-4 bg-white shadow-md rounded-lg">
                            <h2 className="text-sm font-medium mb-2 text-center sm:text-left">
                                <i className="fa-solid fa-briefcase mr-2"></i>
                                Total Booking
                            </h2>
                            <p className="text-2xl my-2 font-bold text-center sm:text-left">40</p>
                            <p className="text-green-500 text-center sm:text-left">
                                <i className="fa-solid fa-chart-line mr-2"></i>
                                4.3% since last month
                            </p>
                        </div>

                        {/* Request Status Card */}
                        <div className="p-4 bg-white shadow-md rounded-lg">
                            <h2 className="text-lg font-semibold mb-4 text-center sm:text-left">Request Status</h2>
                            <div className="flex flex-col items-center">
                                <Doughnut
                                    data={{
                                        datasets: [
                                            {
                                                data: [50, 200, 100],
                                                backgroundColor: ["#ff0000", "#1bff00", "#FFCE56"],
                                                hoverBackgroundColor: ["#FF6384", "#1bff00", "#FFCE56"],
                                            },
                                        ],
                                    }}
                                />
                                <div className="mt-4 space-y-2 text-sm text-center">
                                    <div>
                                        <i className="fa-solid fa-circle text-green-500 mr-2"></i>
                                        12 Approved
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-circle text-yellow-300 mr-2"></i>
                                        9 Pending
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-circle text-red-600 mr-2"></i>
                                        6 Canceled
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Requests Table */}
                <div className="mt-10 p-4 bg-white shadow-md rounded-lg">
                    <h2 className="text-lg font-semibold mb-4 text-center sm:text-left">Requests</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left text-gray-500">
                            <thead className="text-xs bg-gray-200 text-gray-700">
                                <tr>
                                    <th className="px-4 py-3">Unit Name</th>
                                    <th className="px-4 py-3">Date Added</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Number Of Booking</th>
                                    <th className="px-4 py-3">Reserve</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <td className="px-4 py-2 font-medium text-gray-900">Villa Sahle</td>
                                    <td className="px-4 py-2">12 / 3 / 2024</td>
                                    <td className="px-4 py-2">
                                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
                                            <i className="fa-solid fa-circle-check mr-1"></i>
                                            Approved
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">15</td>
                                    <td className="px-4 py-2">
                                        <i className="fa-solid fa-circle text-blue-500"></i> Reserved
                                    </td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td className="px-4 py-2 font-medium text-gray-900">Villa Sahle</td>
                                    <td className="px-4 py-2">12 / 3 / 2024</td>
                                    <td className="px-4 py-2">
                                        <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
                                            <i className="fa-regular fa-clock mr-1"></i>
                                            Pending
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">15</td>
                                    <td className="px-4 py-2">
                                        <i className="fa-solid fa-circle text-gray-500"></i> Not Reserved
                                    </td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td className="px-4 py-2 font-medium text-gray-900">Villa Sahle</td>
                                    <td className="px-4 py-2">12 / 3 / 2024</td>
                                    <td className="px-4 py-2">
                                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                                            <i className="fa-regular fa-circle-xmark mr-1"></i>
                                            Canceled
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">15</td>
                                    <td className="px-4 py-2">
                                        <i className="fa-solid fa-circle text-blue-500"></i> Reserved
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
