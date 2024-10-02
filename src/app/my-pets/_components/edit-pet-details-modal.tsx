import {type FC, useState} from "react";
import {Form} from "~/components/ui/form";
import {
    CreateUpdatePetForm
} from "~/app/my-pets/_components/create-update-pet-form";
import {Button} from "~/components/ui/button";
import {type SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useDeletePet, useUpdatePet} from "~/app/_utils";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "~/components/ui/dialog";
import {ButtonWithLoader} from "~/app/_components/SubmitButton";
import {UpdatePet as FormData, PetSchema, Pet as Props} from "~/utils";

export const EditPetDetailsModal: FC<Props> = (pet) => {
    const methods = useForm<FormData>({
        defaultValues: pet,
        mode: "onSubmit",
        resolver: zodResolver(PetSchema)
    })

    const [isOpen, setIsOpen] = useState(false)

    const {updatePet, isPending: updatePetPending} = useUpdatePet()
    const onSubmit: SubmitHandler<FormData> = data => {
        updatePet(data, {
            onSuccess() {
                setIsOpen(prevState => !prevState)
            }
        })
    }

    const {deletePet, isPending: deletePetPending} = useDeletePet()
    const handleDeletePet = () => {
        deletePet({id: pet.id}, {
            onSuccess() {
                setIsOpen(prevState => !prevState)
            }
        })
    }

    console.log(methods.formState.errors)
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">Edit pet</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit pet</DialogTitle>
                </DialogHeader>
                <Form {...methods} >
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <CreateUpdatePetForm/>
                        <DialogFooter>
                            <ButtonWithLoader
                                variant="destructive"
                                type="button"
                                onClick={handleDeletePet}
                                isPending={deletePetPending}>
                                Delete pet
                            </ButtonWithLoader>
                            <ButtonWithLoader
                                type="submit"
                                isPending={updatePetPending}>
                                Save pet
                            </ButtonWithLoader>
                        </DialogFooter>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>
    )
}