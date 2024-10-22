import { userService } from "@core/service/user";
import useDebounce from "@features/_global/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useUser = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ?? 1;
  const perPage = searchParams.get("perPage") ?? 10;
  const searchQuery = searchParams.get("search") ?? undefined;
  const search = useDebounce(searchQuery, 500);
  const query = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      userService.get({
        queryParams: {
          page: Number(page),
          perPage: Number(perPage),
          search,
        },
      }),
  });
  return query;
};
