import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";

const initialData = {};

const useUser = (query = "") => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isLoading } = useQuery({
    initialData,
    queryKey: ["users"],
    queryFn: async () => {
      const resp = await axiosSecure.get(`/users${query}`);

      return resp.data;
    },
  });

  return [data, refetch, isLoading];
};

export default useUser;
