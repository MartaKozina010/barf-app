import {z} from 'zod';
import {PetSchema as PrismaPetSchema} from "../../../prisma/generated/zod";

export const PetSchema = PrismaPetSchema
    .omit({birthdate: true, neutered: true})
    .extend({
        birthdate: z.coerce.date().optional(),
        neutered: z.boolean().optional(),
    })
export type Pet = z.infer<typeof PetSchema>

export const CreateUpdatePetSchema = PetSchema
    .omit({id: true})
export type CreateUpdatePet = z.infer<typeof CreateUpdatePetSchema>

export const UpdatePetSchema = PetSchema;
export type UpdatePet = Pet

export const DeletePetSchema = PrismaPetSchema
    .pick({id: true})
export type DeletePet = z.infer<typeof DeletePetSchema>