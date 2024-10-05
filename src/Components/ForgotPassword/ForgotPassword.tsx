import { Link } from 'react-router-dom';
function ForgotPassword() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">

                <h1 className="mt-4 text-2xl text-gray-600">Please contact support for assistance.</h1>
                <p className="mt-2 text-gray-500">
                    Phone Number: 01700000000  Email: support@example.com
                </p>
                <Link to="/" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ForgotPassword;
