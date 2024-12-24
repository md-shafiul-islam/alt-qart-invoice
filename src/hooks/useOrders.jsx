import { useQuery } from "@tanstack/react-query";

import axios from "axios";

const initialData = {};

const useOrders = () => {
  const { data, refetch, isLoading } = useQuery({
    initialData,
    queryKey: ["orders"],
    queryFn: async () => {
      const resp = await axios.get(`/assets/orders.json`);

      return resp.data;
    },
  });

  return [data, refetch, isLoading];
};

export default useOrders;
