import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch users from the API
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch users. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-5 text-lg font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-5 text-lg">{error}</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">User List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {users.map((user) => (
          <div
            key={user.id}
            className="border border-gray-300 rounded-lg p-5 bg-green-100 shadow-md hover:shadow-xl transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold mb-3">{user.name}</h2>
            <p className="text-sm mb-2"><strong>Email:</strong> {user.email}</p>
            <p className="text-sm mb-2"><strong>Phone:</strong> {user.phone}</p>
            <p className="text-sm mb-2">
              <strong>Website:</strong> 
              <a 
                href={`http://${user.website}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-700 hover:underline"
              >
                {user.website}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
