// src/components/UserForm.jsx
import { useState } from 'react';
import { useUsers } from '../context/UserContext';

const UserForm = ({ onClose, onSubmit }) => {
  const { addUser } = useUsers();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    username: '',
    website: '',
    companyName: '',
    catchPhrase: '',
    bs: '',
    street: '',
    city: '',
    zipcode: '',
    lat: '',
    lng: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    // Create a complete user object with all required fields
    const newUser = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      username: formData.username || formData.name.toLowerCase().replace(/\s+/g, ''),
      website: formData.website || `${formData.name.toLowerCase().replace(/\s+/g, '')}.com`,
      company: {
        name: formData.companyName,
        catchPhrase: formData.catchPhrase || "Custom user-generated content",
        bs: formData.bs || "user-centric design"
      },
      address: {
        street: formData.street || "123 Main St",
        city: formData.city || "Anytown",
        zipcode: formData.zipcode || "12345",
        geo: {
          lat: formData.lat || "0",
          lng: formData.lng || "0"
        }
      }
    };
    
    addUser(newUser);
    onSubmit();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl my-8">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Create New User</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
            <div className="col-span-2">
              <h3 className="text-lg font-medium text-gray-700 mb-2 border-b pb-1">Basic Information</h3>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1 text-sm" htmlFor="name">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1 text-sm" htmlFor="email">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1 text-sm" htmlFor="phone">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1 text-sm" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Auto-generated if empty"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1 text-sm" htmlFor="website">
                Website
              </label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Auto-generated if empty"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="col-span-2 mt-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2 border-b pb-1">Company Information</h3>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1 text-sm" htmlFor="companyName">
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1 text-sm" htmlFor="catchPhrase">
                Catchphrase
              </label>
              <input
                type="text"
                id="catchPhrase"
                name="catchPhrase"
                value={formData.catchPhrase}
                onChange={handleChange}
                placeholder="Optional company tagline"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-1 text-sm" htmlFor="bs">
                BS (Business Strategy)
              </label>
              <input
                type="text"
                id="bs"
                name="bs"
                value={formData.bs}
                onChange={handleChange}
                placeholder="Optional business description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="col-span-2 mt-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2 border-b pb-1">Address Information</h3>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-1 text-sm" htmlFor="street">
                Street
              </label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                placeholder="Optional street address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1 text-sm" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Optional city"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1 text-sm" htmlFor="zipcode">
                Zipcode
              </label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                placeholder="Optional zipcode"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1 text-sm" htmlFor="lat">
                Latitude
              </label>
              <input
                type="text"
                id="lat"
                name="lat"
                value={formData.lat}
                onChange={handleChange}
                placeholder="Optional latitude"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1 text-sm" htmlFor="lng">
                Longitude
              </label>
              <input
                type="text"
                id="lng"
                name="lng"
                value={formData.lng}
                onChange={handleChange}
                placeholder="Optional longitude"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="col-span-2 flex justify-end space-x-3 pt-4 border-t mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;