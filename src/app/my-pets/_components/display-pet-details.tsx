import {type FC} from "react";
import {Button} from "~/components/ui/button";
import {type PetDetails} from "~/utils/types/pets-types";

type Props = PetDetails & {
    setEditableId: (id: number | null) => void;
}

export const DisplayPetDetails: FC<Props> = ({id, age, name, setEditableId}) => {
    return (
        <>
            <div>ID: {id}</div>
            <div>name: {name}</div>
            <div>age: {age}</div>
            <Button onClick={() => setEditableId(id)}>Edit</Button>
        </>
    )
}