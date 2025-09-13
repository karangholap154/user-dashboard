// src/pages/UserDetails.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useUsers } from "../context/UserContext";
import { useState, useEffect } from "react";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useUsers();
  const user = users.find((u) => u.id === parseInt(id));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-medium text-gray-800">User not found</h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-gradient-to-r from-yellow-400 to-green-500 hover:from-yellow-500 hover:to-green-600 text-white px-4 py-2 rounded-lg transition-all duration-200 inline-flex items-center text-sm shadow-sm hover:shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // Generate a color based on user ID for consistent coloring
  const colorIndex = user.id % 3;
  const colorClasses = [
    "bg-yellow-100 border-yellow-200 text-yellow-700",
    "bg-green-100 border-green-200 text-green-700",
    "bg-blue-100 border-blue-200 text-blue-700",
  ];

  return (
    <div
      className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-opacity duration-300 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        onClick={() => navigate("/")}
        className="mb-6 bg-white text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg transition-all duration-200 inline-flex items-center text-sm border border-gray-200 shadow-sm hover:shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to Dashboard
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
        <div className="bg-gradient-to-r from-yellow-50 to-green-50 p-6 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row items-center">
            <div
              className={`w-20 h-20 rounded-full ${colorClasses[colorIndex]} flex items-center justify-center font-medium text-2xl mb-4 sm:mb-0 sm:mr-6 border`}
            >
              {user.name.charAt(0)}
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-medium text-gray-800">
                {user.name}
              </h2>
              <p className="text-gray-500">@{user.username}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100 transition-all duration-200 hover:shadow-sm">
              <h3 className="text-base font-medium text-gray-800 mb-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact Information
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> {user.email}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Phone:</span> {user.phone}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Website:</span> {user.website}
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border border-green-100 transition-all duration-200 hover:shadow-sm">
              <h3 className="text-base font-medium text-gray-800 mb-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-green-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Address
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">
                  {user.address.street}, {user.address.city}
                </p>
                <p className="text-gray-600">{user.address.zipcode}</p>
                <p className="text-gray-600">
                  <span className="font-medium">Geo:</span>{" "}
                  {user.address.geo.lat}, {user.address.geo.lng}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-green-50 p-5 rounded-lg border border-yellow-100 transition-all duration-200 hover:shadow-sm">
            <h3 className="text-base font-medium text-gray-800 mb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h11-2zm2 4h-2v2h2V9z"
                  clipRule="evenodd"
                />
              </svg>
              Company
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">
                <span className="font-medium">Name:</span> {user.company.name}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Catchphrase:</span>{" "}
                {user.company.catchPhrase || "No catchphrase provided"}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">BS:</span>{" "}
                {user.company.bs || "No business strategy provided"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
