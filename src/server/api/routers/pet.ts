import {z} from "zod";
import {Species, Pet} from '@prisma/client'
import {createTRPCRouter, publicProcedure} from "~/server/api/trpc";

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
        .input(z.object({
            petName: z.string(),
            species: z.nativeEnum(Species),
            weight: z.number(),
            percentOfWeight: z.number(),
            breed: z.string(),
            birthdate: z.date().nullable(),
            neutered: z.boolean().nullable()
        }))
        //TODO change them all with zod-prisma as Pet model
        .mutation(async ({ctx, input}) => {
            return ctx.db.pet.create({
                data: {...input}
            })
        }),

    updatePetById: publicProcedure
        .input(z.object({
            id: z.number(),
            petName: z.string(),
        }))
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
        .input(z.object({
            id: z.number(),
        }))
        .mutation(async ({ctx, input}) => {
            return ctx.db.pet.delete({
                where: {
                    id: input.id,
                }
            })
        })

});
