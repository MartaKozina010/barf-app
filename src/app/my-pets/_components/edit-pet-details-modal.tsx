import {type FC, useState} from "react";
import {Form} from "~/components/ui/form";
import {
    CreateUpdatePetForm, PetFormSchema,
    petFormSchema,
    type PetFormSchema as FormData
} from "~/app/my-pets/_components/create-update-pet-form";
import {Button} from "~/components/ui/button";
import {type SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useDeletePet, useUpdatePet} from "~/app/_utils";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "~/components/ui/dialog";
import {ButtonWithLoader} from "~/app/_components/SubmitButton";

type Props = PetFormSchema & { id: number }
export const EditPetDetailsModal: FC<Props> = (props) => {
    const methods = useForm<FormData>({
        defaultValues: {...props},
        mode: "onSubmit",
        resolver: zodResolver(petFormSchema)
    })

    const [isOpen, setIsOpen] = useState(false)

    const {updatePet, isPending: updatePetPending} = useUpdatePet()
    const onSubmit: SubmitHandler<FormData> = data => {
        updatePet({id: props.id, petName: data.petName}, {
            onSuccess() {
                setIsOpen(prevState => !prevState)
            }
        })
    }
    //TODO add all fields

    const {deletePet, isPending: deletePetPending} = useDeletePet()
    const handleDeletePet = () => {
        deletePet({id: props.id}, {
            onSuccess() {
                setIsOpen(prevState => !prevState)
            }
        })
    }

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
                                type="submit"
                                isPending={updatePetPending}>
                                Save pet
                            </ButtonWithLoader>
                            <ButtonWithLoader
                                type="button"
                                onClick={handleDeletePet}
                                isPending={deletePetPending}>
                                Delete pet
                            </ButtonWithLoader>
                        </DialogFooter>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>
    )
}