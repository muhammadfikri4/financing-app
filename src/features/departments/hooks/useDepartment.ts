import { departmentService } from "@core/service/department";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useDepartment = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ?? 1;
  const perPage = searchParams.get("perPage") ?? 10;
  const query = useQuery({
    queryKey: ["departments"],
    queryFn: () =>
      departmentService.get({
        queryParams: {
          page: Number(page),
          perPage: Number(perPage),
        },
      }),
  });
  return query;
};
