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
        <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
          Users{" "}
          <span className="text-indigo-600">({filteredUsers.length})</span>
        </h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
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
              className="transition-all duration-500 ease-in-out transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <UserCard user={user} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 animate-pulse">
          <div className="bg-white p-8 rounded-2xl shadow-md inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-500 text-xl">No users found</p>
            <p className="text-gray-400 mt-2">
              Try adjusting your search or create a new user
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
