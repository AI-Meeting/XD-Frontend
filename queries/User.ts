import { useMutation, useQuery, useQueryClient } from "react-query";
import { UserType } from "../@types/UserType";
import queryKeys from "../contexts/QueryKey";
import question from "../lib/api/question";
import user from "../lib/api/user";

export const useUserInfo = () =>
  useQuery(queryKeys.userInfo, () => user.getUser(), {
    cacheTime: Infinity,
    staleTime: Infinity,
    suspense: false,
  });

export const useMyInterview = () =>
  useQuery(queryKeys.myInterview, () => user.getMyInterview(), {
    cacheTime: 5,
    staleTime: Infinity,
  });

export const usePostQuestionAnswer = (answer, questionId) => {
  const client = useQueryClient();

  return useMutation(
    queryKeys.postQuestionAnswer,
    () => question.patchQuestionAnswer(answer, questionId),
    {
      onSuccess: () => {
        client.invalidateQueries(queryKeys.company);
      },
      onError: () => {},
    }
  );
};

export const useDeleteQuestionAnswer = (answerId) => {
  const client = useQueryClient();

  return useMutation(
    queryKeys.deleteQuestionAnswer,
    () => question.deleteQuestionAnswer(answerId),
    {
      onSuccess: () => {
        client.invalidateQueries(queryKeys.company);
      },
      onError: () => {},
    }
  );
};

export const usePatchQuestionAnswer = (answer, answerId) => {
  const client = useQueryClient();

  return useMutation(
    queryKeys.patchQuestionAnswer,
    () => question.patchQuestionAnswer(answer, answerId),
    {
      onSuccess: () => {
        client.invalidateQueries(queryKeys.company);
      },
      onError: () => {},
    }
  );
};
