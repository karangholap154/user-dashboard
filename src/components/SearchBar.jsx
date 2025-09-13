// src/components/SearchBar.jsx
import { useState } from 'react';
import { useUsers } from '../context/UserContext';

const SearchBar = () => {
  const { filterUsers } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    setSearchTerm(value);
    filterUsers(value);
  };

  return (
    <div className="mb-8 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search users by name..."
        value={searchTerm}
        onChange={handleChange}
        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 shadow-sm transition-all duration-200 text-sm bg-white"
      />
    </div>
  );
};

export default SearchBar;