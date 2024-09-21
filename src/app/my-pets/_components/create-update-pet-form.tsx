"use client"

import {type FC} from "react";
import {z} from "zod"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form"
import {Input} from "~/components/ui/input"
import {useFormContext} from "react-hook-form";

export const petFormSchema = z.object({
    petName: z.string().min(2, {message: "Must be at least 2 letter"}).max(50),
    age: z.number().max(100, {message: "Max 100"})
})
export type PetFormSchema = z.infer<typeof petFormSchema>

export const CreateUpdatePetForm: FC = () => {
    const methods = useFormContext<PetFormSchema>()

    return (
        <>
            <FormField
                control={methods.control}
                name="petName"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Pet name</FormLabel>
                        <FormControl>
                            <Input {...field}
                                   placeholder="pet name"
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <FormField
                control={methods.control}
                name="age"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                            <Input {...field}
                                   placeholder="age"
                                   onChange={e => field.onChange(e.target.value ? +e.target.value : undefined)}
                                   type="number"
                                   className="[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

        </>
    )
}





