// src/components/UserCard.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserCard = ({ user }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate a color based on user ID for consistent coloring
  const colorIndex = user.id % 3;
  const colorClasses = [
    'bg-yellow-50 border-yellow-100 text-yellow-600',
    'bg-green-50 border-green-100 text-green-600',
    'bg-blue-50 border-blue-100 text-blue-600'
  ];

  return (
    <div 
      className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        transform: isHovered ? 'translateY(-4px)' : 'none',
      }}
    >
      {/* Accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-green-500"></div>
      
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 rounded-full ${colorClasses[colorIndex]} flex items-center justify-center font-medium text-lg mr-3 border`}>
          {user.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800">{user.name}</h3>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>
      
      <div className="space-y-3 mb-5">
        <p className="text-gray-600 flex items-center text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          {user.email}
        </p>
        <p className="text-gray-600 flex items-center text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          {user.phone}
        </p>
        <p className="text-gray-600 flex items-center text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h11-2zm2 4h-2v2h2V9z" clipRule="evenodd" />
          </svg>
          {user.company.name}
        </p>
      </div>
      
      <Link
        to={`/user/${user.id}`}
        className="block w-full bg-gradient-to-r from-yellow-50 to-green-50 text-gray-700 text-center py-2.5 rounded-lg transition-all duration-200 border border-yellow-200 hover:from-yellow-100 hover:to-green-100 hover:border-yellow-200 text-sm font-medium hover:shadow-sm"
      >
        View Details
      </Link>
    </div>
  );
};

export default UserCard;