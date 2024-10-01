import {api} from "~/trpc/react";

export const useGetPetsList = () => {
    const {data: petsList, isLoading} = api.pet.getPetsList.useQuery()

    return {petsList, isLoading}
}