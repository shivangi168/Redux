import { useState, useEffect } from "react";

const UserListing = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-3">User List</h2>

      {/* Search Input */}
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="ml-2 px-3 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
          >
            Reset
          </button>
        )}
      </div>

      {/* User List */}
      <ul className="divide-y divide-gray-300">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.id} className="p-2 hover:bg-gray-100">
              <span className="font-semibold">{user.name}</span> - {user.email}
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No users found.</p>
        )}
      </ul>
    </div>
  );
};

export default UserListing;
