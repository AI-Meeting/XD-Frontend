import { useQuery } from "react-query";
import { UserType } from "../@types/UserType";
import queryKeys from "../contexts/QueryKey";
import user from "../lib/api/user";

export const useUserInfo = () =>
  useQuery(queryKeys.userInfo, () => user.getUser(), {
    cacheTime: Infinity,
    staleTime: Infinity,
    suspense: false,
  });

export const useMyInterview = () =>
  useQuery(queryKeys.myInterview, {
    cacheTime: 5,
    staleTime: Infinity,
  });
