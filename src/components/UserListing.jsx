import useFetchData from "../UsefetchData";
const UserListing = () => {
  const { data, error, isLoading } = useFetchData("https://jsonplaceholder.typicode.com/users");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  );
};

export default UserListing;
