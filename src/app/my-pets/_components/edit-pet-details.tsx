import {type FC} from "react";
import {Form} from "~/components/ui/form";
import {
    CreateUpdatePetForm,
    petFormSchema,
    type PetFormSchema as FormData
} from "~/app/my-pets/_components/create-update-pet-form";
import {Button} from "~/components/ui/button";
import {type SubmitHandler, useForm} from "react-hook-form";
import {type PetDetails} from "~/utils/types/pets-types";
import {zodResolver} from "@hookform/resolvers/zod";
import {useDeletePet, useUpdatePet} from "~/app/_utils";

type Props = PetDetails & {
    setEditableId: (id: number | null) => void;
}

export const EditPetDetails: FC<Props> = ({name, age, id, setEditableId}) => {
    const methods = useForm<FormData>({
        defaultValues: {petName: name, age},
        mode: "onSubmit",
        resolver: zodResolver(petFormSchema)
    })

    const {updatePet} = useUpdatePet()
    const onSubmit: SubmitHandler<FormData> = data => {
        updatePet({id: id, name: data.petName, age: data.age})
        setEditableId(null)
    }

    const handleCancel = () => setEditableId(null)

    const {deletePet} = useDeletePet()
    const handleDeletePet = () => {
        deletePet({id: id})
    }

    return (
        <Form {...methods} >
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <CreateUpdatePetForm/>
                <Button type="submit">Save edited pet</Button>
            </form>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button onClick={handleDeletePet}>Delete pet</Button>
        </Form>
    )
}