import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";

const initialData = {};

const useContactUs = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isLoading } = useQuery({
    initialData,
    queryKey: ["contactus"],
    queryFn: async () => {
      const resp = await axiosSecure.get(`/contact-us`);

      return resp.data;
    },
  });

  return [data, refetch, isLoading];
};

export default useContactUs;
