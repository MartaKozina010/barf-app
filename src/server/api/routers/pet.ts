import {z} from "zod";

import {createTRPCRouter, publicProcedure} from "~/server/api/trpc";
import {PetDetails} from "~/utils/types/pets-types";

const pets: PetDetails[] = [
    {
        id: 1,
        name: "Beza",
        age: 3
    },
    {
        id: 2,
        name: "Pysia",
        age: 14
    }
];

export const petRouter = createTRPCRouter({
    getPetsList: publicProcedure
        .query(() => pets),

    createNewPet: publicProcedure
        .input(z.object({
            name: z.string(),
            age: z.number()
        }))
        .mutation(async ({input}) => {
            const pet: PetDetails = {
                id: pets.length + 1,
                name: input.name,
                age: input.age
            };
            pets.push(pet);
            return pet;
        }),

    updatePetById: publicProcedure
        .input(z.object({
            id: z.number(),
            name: z.string(),
            age: z.number()
        }))
        .mutation(async ({input}) => {
            const pet: PetDetails = {
                id: input.id,
                name: input.name,
                age: input.age
            };
            pets.push(pet);
            return pet;
        })
});
