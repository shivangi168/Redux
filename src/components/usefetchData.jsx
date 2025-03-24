import { useQuery } from "@tanstack/react-query";

const UseFetchData = (url) => {
  const { data, error, isLoading } = useQuery(
    ["data", url], async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  });

  return { data, error, isLoading };
};

export default UseFetchData;
