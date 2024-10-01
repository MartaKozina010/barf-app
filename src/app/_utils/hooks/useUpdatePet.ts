import {api} from "~/trpc/react";

export const useUpdatePet = () => {
    const utils = api.useUtils()
    const {mutate: updatePet, isPending} = api.pet.updatePetById.useMutation({
        async onSuccess() {
            await utils.pet.invalidate()
        }
    })

    return {updatePet, isPending}
}
