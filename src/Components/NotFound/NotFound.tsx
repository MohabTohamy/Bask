import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <h2 className="mt-4 text-2xl text-gray-600">Page Not Found</h2>
                <p className="mt-2 text-gray-500">
                    The page you're looking for doesn't exist.
                </p>
                <Link to="/" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
