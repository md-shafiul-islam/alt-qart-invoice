import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";

const initialData = {};
const useWorkSheet = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isLoading } = useQuery({
    initialData,
    queryKey: ["workSheet"],
    queryFn: async () => {
      const resp = await axiosSecure.get(`/work-sheets`);
      return resp.data;
    },
  });

  return [data, refetch, isLoading];
};

export default useWorkSheet;
