import { useMutation, useQuery, useQueryClient } from "react-query";
import { CompanyType } from "../@types/CompanyType";
import queryKeys from "../contexts/QueryKey";
import question from "../lib/api/question";

export const useCompany = (companyId: number) => {
  return useQuery(
    [queryKeys.company, companyId],
    () => question.getCompany(companyId),
    {
      enabled: !!companyId || !!companyId,
      cacheTime: 5,
      staleTime: Infinity,
    }
  );
};

export const usePostQuestionAnswer = (answer, questionId) => {
  return useMutation(() => question.postQuestionAnswer(answer, questionId), {
    onSuccess: () => alert("답변을 등록했습니다."),
    onError: () => alert("답변 등록에 실패했습니다."),
  });
};

export const useDeleteCompany = (companyId: number) => {
  const client = useQueryClient();

  return useMutation(() => question.deleteComapny(companyId), {
    onSuccess: () => {
      client.invalidateQueries(queryKeys.company);
    },
    onError: () => {},
  });
};
