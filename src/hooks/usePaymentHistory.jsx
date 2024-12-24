import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";

const initialData = {};

const usePaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isLoading } = useQuery({
    initialData,
    queryKey: ["paymentHistory"],
    queryFn: async () => {
      const resp = await axiosSecure.get(`/payments`);

      return resp.data;
    },
  });

  return [data, refetch, isLoading];
};

export default usePaymentHistory;
