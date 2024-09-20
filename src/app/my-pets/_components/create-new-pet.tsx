'use client'

import {type SubmitHandler, useForm} from "react-hook-form";
import {Form} from "~/components/ui/form";
import {CreateUpdatePetForm, petFormSchema, type PetFormSchema as FormData} from "~/app/my-pets/_components/create-update-pet-form";
import {Button} from "~/components/ui/button";
import {type FC} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card} from "~/components/ui/card";
import {api} from "~/trpc/react";

export const CreateNewPet: FC = () => {
    const methods = useForm<FormData>({
        mode: "onSubmit",
        resolver: zodResolver(petFormSchema),
    })

    const {mutate: createNewPet, error} = api.pet.createNewPet.useMutation()

    const onSubmit: SubmitHandler<FormData> = data => {
        createNewPet({name: data.petName, age: data.age})
        console.log("CREATE name: ", data.petName)
    }

    return (
        <Card className="p-lg">
        <Form {...methods} >
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <CreateUpdatePetForm/>
                <Button type="submit">Add new</Button>
            </form>
        </Form>
        </Card>
    );
}