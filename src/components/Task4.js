import React, { useEffect, useState } from 'react';

function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setUsers(data);
          setLoading(false);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      setError(new Error('Data loading is taking too long.'));
      setLoading(false);
    }, 10000); // Set a timeout for 10 seconds (adjust as needed)

    fetchData();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <h1>User Table</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No data available.</div>
      )}
    </div>
  );
}

export default UserTable;
