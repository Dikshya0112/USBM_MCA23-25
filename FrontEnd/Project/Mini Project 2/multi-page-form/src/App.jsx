import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

const PersonalInfo = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email) {
      navigate('/address');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <form className="flex flex-col gap-4 max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h2 className="text-3xl font-semibold text-blue-700">Step 1: Personal Information</h2>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName || ''}
        onChange={handleChange}
        className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-sm"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName || ''}
        onChange={handleChange}
        className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-sm"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email || ''}
        onChange={handleChange}
        className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-sm"
      />
      <button type="button" onClick={handleNext} className="bg-blue-600 text-white py-2 px-6 rounded shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
        Next
      </button>
    </form>
  );
};

const AddressInfo = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (formData.address && formData.city && formData.zipCode) {
      navigate('/review');
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleBack = () => navigate('/');

  return (
    <form className="flex flex-col gap-4 max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h2 className="text-3xl font-semibold text-blue-700">Step 2: Address Information</h2>
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address || ''}
        onChange={handleChange}
        className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-sm"
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city || ''}
        onChange={handleChange}
        className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-sm"
      />
      <input
        type="text"
        name="zipCode"
        placeholder="Zip Code"
        value={formData.zipCode || ''}
        onChange={handleChange}
        className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-sm"
      />
      <div className="flex justify-between">
        <button type="button" onClick={handleBack} className="bg-gray-600 text-white py-2 px-6 rounded shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none">
          Back
        </button>
        <button type="button" onClick={handleNext} className="bg-blue-600 text-white py-2 px-6 rounded shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
          Next
        </button>
      </div>
    </form>
  );
};

const ReviewSubmit = ({ formData }) => {
  const navigate = useNavigate();

  const handleBack = () => navigate('/address');

  const handleSubmit = () => {
    alert('Form submitted successfully!');
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h2 className="text-3xl font-semibold text-blue-700">Step 3: Review and Submit</h2>
      <div className="bg-sky-100 p-4 my-1 rounded-lg shadow-inner">
        <p className="mb-3 text-lg"><strong>First Name:</strong> {formData.firstName}</p>
        <p className="mb-3 text-lg"><strong>Last Name:</strong> {formData.lastName}</p>
        <p className="mb-3 text-lg"><strong>Email:</strong> {formData.email}</p>
        <p className="mb-3 text-lg"><strong>Address:</strong> {formData.address}</p>
        <p className="mb-3 text-lg"><strong>City:</strong> {formData.city}</p>
        <p className="mb-3 text-lg"><strong>Zip Code:</strong> {formData.zipCode}</p>
      </div>
      <div className="flex justify-between mt-5">
        <button type="button" onClick={handleBack} className="bg-gray-600 text-white py-2 px-6 rounded shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none">
          Back
        </button>
        <button type="button" onClick={handleSubmit} className="bg-green-600 text-white py-2 px-6 rounded shadow-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none">
          Submit
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [formData, setFormData] = useState({});

  return (
    <Router>
      <div className="p-4 bg-blue-50 min-h-screen flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={<PersonalInfo formData={formData} setFormData={setFormData} />}
          />
          <Route
            path="/address"
            element={<AddressInfo formData={formData} setFormData={setFormData} />}
          />
          <Route
            path="/review"
            element={<ReviewSubmit formData={formData} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
