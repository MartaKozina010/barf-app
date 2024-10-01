import {api} from "~/trpc/react";

export const useDeletePet = () => {
    const utils = api.useUtils()
    const {mutate: deletePet, isPending} = api.pet.deletePetById.useMutation({
        async onSuccess() {
            await utils.pet.invalidate()
        }
    })

    return {deletePet, isPending}
}
