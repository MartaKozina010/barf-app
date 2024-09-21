'use client'

import {type SubmitHandler, useForm} from "react-hook-form";
import {Form} from "~/components/ui/form";
import {
    CreateUpdatePetForm,
    petFormSchema,
    type PetFormSchema as FormData
} from "~/app/my-pets/_components/create-update-pet-form";
import {Button} from "~/components/ui/button";
import {type FC} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card} from "~/components/ui/card";
import {useCreateNewPet} from "~/app/_utils";

export const CreateNewPet: FC = () => {
    const methods = useForm<FormData>({
        defaultValues: {petName: "", age: undefined},
        mode: "onSubmit",
        resolver: zodResolver(petFormSchema),
    })

    const {createNewPet} = useCreateNewPet()
    const onSubmit: SubmitHandler<FormData> = data => {
        createNewPet({name: data.petName, age: data.age})
        methods.reset({age: 0})
    }

    return (
        <Card className="p-lg">
            <h2>Create new pet</h2>
            <Form {...methods} >
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <CreateUpdatePetForm/>
                    <Button type="submit">Add new</Button>
                </form>
            </Form>
        </Card>
    );
}