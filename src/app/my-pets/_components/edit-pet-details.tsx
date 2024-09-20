import {type FC} from "react";
import {Form} from "~/components/ui/form";
import {CreateUpdatePetForm, type PetFormSchema as FormData} from "~/app/my-pets/_components/create-update-pet-form";
import {Button} from "~/components/ui/button";
import {type SubmitHandler, useForm} from "react-hook-form";
import {type PetDetails} from "~/utils/types/pets-types";
import {api} from "~/trpc/react";

type Props = PetDetails & {
    setEditableId: (id: number | null) => void;
}

export const EditPetDetails: FC<Props> = ({name, age, id, setEditableId}) => {
    const methods = useForm<FormData>({defaultValues: {petName: name, age}})

    const {mutate: updatePet} = api.pet.updatePetById.useMutation()

    const onSubmit: SubmitHandler<FormData> = data => {
        console.log("UPDATE name: ", data.petName)
        updatePet({id: id, name: data.petName, age: data.age})
        setEditableId(null)
    }

    const handleCancel = () => setEditableId(null)

    return (
        <Form {...methods} >
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <CreateUpdatePetForm/>
                <Button type="submit">Save edited pet</Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </form>
        </Form>
    )
}