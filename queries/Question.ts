import { useMutation, useQuery, useQueryClient } from "react-query";
import queryKeys from "../contexts/QueryKey";
import question from "../lib/api/question";

export const useCompany = (companyId: number) => {
  return useQuery(
    [queryKeys.company, companyId],
    () => question.getCompany(companyId),
    {
      enabled: !!companyId,
      cacheTime: 5,
      staleTime: Infinity,
    }
  );
};

export const useDeleteCompany = (companyId: number) => {
  const client = useQueryClient();

  return useMutation(
    queryKeys.deleteCompany,
    () => question.deleteComapny(companyId),
    {
      onSuccess: () => {
        client.invalidateQueries(queryKeys.company);
      },
      onError: () => {},
    }
  );
};
