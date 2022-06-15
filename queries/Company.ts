import { useQuery } from "react-query";
import queryKeys from "../contexts/QueryKey";
import user from "../lib/api/user";

export const useUserInfo = () =>
  useQuery(queryKeys.userInfo, () => user.getUser(), {
    cacheTime: Infinity,
    staleTime: Infinity,
    suspense: false,
  });
