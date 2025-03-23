import { useQuery } from "@tanstack/react-query";
const fetchUser =  async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };

const usePaginatedData = (page) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users", page],  
    queryFn: fetchUser,
  });

  return { data, error, isLoading };
};

export default usePaginatedData;
