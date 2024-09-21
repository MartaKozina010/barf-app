import {api} from "~/trpc/react";

export const useCreateNewPet = () => {
    const utils = api.useUtils()
    const {mutate: createNewPet} = api.pet.createNewPet.useMutation({
        onSuccess() {
            void utils.pet.invalidate()
        }
    })

    return {createNewPet}
}
