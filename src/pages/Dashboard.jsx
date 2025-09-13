// src/pages/Dashboard.jsx
import { useState } from "react";
import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";
import SearchBar from "../components/SearchBar";
import { useUsers } from "../context/UserContext";

const Dashboard = () => {
  const { filteredUsers } = useUsers();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Total Users</h2>
          <p className="text-gray-500 mt-1 flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            {filteredUsers.length} users found
          </p>
        </div>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-gradient-to-r from-yellow-400 to-green-500 hover:from-yellow-500 hover:to-green-600 text-white px-5 py-2.5 rounded-lg transition-all duration-200 flex items-center mt-4 sm:mt-0 shadow-sm hover:shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          Create New User
        </button>
      </div>

      <SearchBar />

      {isFormOpen && (
        <UserForm
          onClose={() => setIsFormOpen(false)}
          onSubmit={() => setIsFormOpen(false)}
        />
      )}

      {filteredUsers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user, index) => (
            <div
              key={user.id}
              className="transition-all duration-300 ease-in-out"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <UserCard user={user} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 inline-block max-w-md">
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
            <p className="text-gray-500 text-lg">No users found</p>
            <p className="text-gray-400 mt-2 text-sm">
              Try adjusting your search or create a new user
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
