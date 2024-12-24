import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";

const initialData = {};

const useTask = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isLoading } = useQuery({
    initialData,
    queryKey: ["tasks"],
    queryFn: async () => {
      const resp = await axiosSecure.get(`/tasks`);

      return resp.data;
    },
  });

  return [data, refetch, isLoading];
};

export default useTask;
