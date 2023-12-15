import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.js";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = searchTerm
          ? `http://localhost:5000/users/search?search=${searchTerm}`
          : "http://localhost:5000/users";

        const res = await fetch(url);
        const data = await res.json(); // Parse the response as JSON

        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div >
      <Navbar />
      <div className="p-2">
      <h1 className="text-3xl text-blue-700 font-bold mb-4">Users</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 w-full rounded"
        />
      </div>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-2 border text-left">Name</th>
              <th className="p-2 border text-left">Email</th>
              <th className="p-2 border text-left">Number</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="p-2 border text-left">{user.name}</td>
                <td className="p-2 border text-left">{user.email}</td>
                <td className="p-2 border text-left">{user.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>

  );
};

export default Users;
