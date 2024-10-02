'use client'

import {Button} from "~/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"
import {Form} from "~/components/ui/form";
import {
    CreateUpdatePetForm,
} from "~/app/my-pets/_components/create-update-pet-form";
import {type SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useCreateNewPet} from "~/app/_utils";
import {useState} from "react";
import {ButtonWithLoader} from "~/app/_components/SubmitButton";
import {CreateUpdatePet as FormData, CreateUpdatePetSchema} from "~/utils";

export const CreateNewPetModal = () => {
    const methods = useForm<FormData>({
        mode: "onSubmit",
        resolver: zodResolver(CreateUpdatePetSchema),
    })

    const [isOpen, setIsOpen] = useState(false);
    const {createNewPet, isPending} = useCreateNewPet()

    const onSubmit: SubmitHandler<FormData> = data => {
        createNewPet(data, {
            onSuccess() {
                setIsOpen(prevState => !prevState)
                methods.reset()
            }
        })
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-base-yellow">Add new pet</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add new pet</DialogTitle>
                </DialogHeader>
                <Form {...methods} >
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <CreateUpdatePetForm/>
                        <DialogFooter>
                            <ButtonWithLoader isPending={isPending} type="submit">Add new pet</ButtonWithLoader>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
