import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-900">
      <AlertCircle size={80} className="text-red-500 mb-4 animate-bounce" />
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl text-gray-600 mt-2">Oops! Page not found.</p>
      <p className="text-gray-500 text-center max-w-md mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
