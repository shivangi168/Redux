import { useQuery , useQueryClient } from "@tanstack/react-query";
 const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!res.ok){
        throw new Error("response was not ok");
    }
    return res.json();
 };
 const queryClient = useQueryClient();

 function UserList() {
    const [fetchData, setFetchData] = useState(false);
//     const { id } = useParams(); // Suppose yeh URL se user ID le raha hai

// const { data } = useQuery({
//   queryKey: ["user", id],
//   queryFn: () => fetchUserById(id),
//   enabled: !!id, // Jab tak `id` nahi milega, API call nahi hogi
// });


// const { data, refetch } = useQuery({
//     queryKey: ["users"],
//     queryFn: fetchUsers,
//   });
  
//   return (
//     <div>
//       <button onClick={() => refetch()}>Refetch Users</button>
//       {data && <p>{JSON.stringify(data)}</p>}
//     </div>
//   );
  

    const { data , error, isLoading} = useQuery ({
        querykey: ["users"],
        queryFn:fetchUsers,
        // staleTime: Infinity, // API call ek baar hoga aur dubara refetch nahi hoga

        refetchIntervalInBackground: false, // Background me API call nahi karega
        refetchOnWindowFocus: false, // Auto refetch disable
        enabled: fetchData,
        refetchOnReconnect: true, // Jab user offline se online aaye, API refetch hoga
        staleTime:5000, // 5 secnd tk refresh rkhega  (api call nhi kreg/)
        // refetchInterval: 15000, // Har 15 sec me background me API call karega
        cacheTime:60000, // will clear cache afet 60 seconds
        retry:5, // 5 timex retry 
        retryDelay: (attempt) => attempt * 1000, // Har retry ke beech 1 sec ka gap

        onError :(err)=>{
            console.error("errryr in fetchig  data")
        }
    });

    if(isLoading) return <p>Loading users....</p>
    if(error) return <p>Error :{error.message}</p>
    return (
        <div>
      <h2>User List</h2>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f4f4f4" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setFetchData(true)}>Fetch Users</button>
    {data && <p>{JSON.stringify(data)}</p>}
    <button onClick={() => queryClient.cancelQueries(["users"])}>Cancel API</button>


    </div>
    )
 }
 export default UserList;