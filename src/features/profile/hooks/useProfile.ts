import { profileService } from "@core/service/profile"
import { useQuery } from "@tanstack/react-query"

export const useProfile = () => {
    const query = useQuery({
        queryKey: ['profile'],
        queryFn: () => profileService.get()
    })
    return query
}