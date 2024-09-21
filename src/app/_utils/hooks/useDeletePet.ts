import {api} from "~/trpc/react";

export const useDeletePet = () => {
    const utils = api.useUtils()
    const {mutate: deletePet} = api.pet.deletePetById.useMutation({
        async onSuccess() {
            await utils.pet.invalidate()
        }
    })

    return {deletePet}
}
