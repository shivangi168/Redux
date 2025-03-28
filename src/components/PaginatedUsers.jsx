import { useState } from "react";
import usePaginatedData from "./usePaginatedData";

const PaginatedUsers = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = usePaginatedData(page);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul>
        { data && data.length>0 && data.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default PaginatedUsers;
