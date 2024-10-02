import {createTRPCRouter, publicProcedure} from "~/server/api/trpc";
import {CreateUpdatePetSchema, DeletePetSchema, UpdatePetSchema} from "~/utils";

export const petRouter = createTRPCRouter({
    getPetsList: publicProcedure
        .query(({ctx}) => ctx.db.pet.findMany().then(
            petList => petList.map(pet => ({
                ...pet,
                birthdate: pet.birthdate ?? undefined,
                neutered: pet.neutered ?? undefined
            }))
        )),

    createNewPet: publicProcedure
        .input(CreateUpdatePetSchema)
        .mutation(async ({ctx, input}) => {
            return ctx.db.pet.create({
                data: input
            })
        }),

    updatePetById: publicProcedure
        .input(UpdatePetSchema)
        .mutation(async ({ctx, input}) => {
            return ctx.db.pet.update({
                where: {
                    id: input.id,
                },
                data: {
                    petName: input.petName,
                }
            })
        }),

    deletePetById: publicProcedure
        .input(DeletePetSchema)
        .mutation(async ({ctx, input}) => {
            return ctx.db.pet.delete({
                where: {
                    id: input.id,
                }
            })
        })

});
