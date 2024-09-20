'use client';

import {type FC, useState} from "react";
import {Card} from "~/components/ui/card";
import {DisplayPetDetails} from "~/app/my-pets/_components/display-pet-details";
import {EditPetDetails} from "~/app/my-pets/_components/edit-pet-details";
import {api} from "~/trpc/react";

export const PetsList: FC = () => {
    const [editableId, setEditableId] = useState<number | null>(null);
    const {data: petsList, isLoading, error} = api.pet.getPetsList.useQuery()

    return (
        <>
            {petsList?.map(pet => <Card key={pet.id}>
                {editableId === pet.id
                    ? <EditPetDetails {...pet} setEditableId={setEditableId}/>
                    : <DisplayPetDetails {...pet} setEditableId={setEditableId}/>
                }
            </Card>)}
        </>
    )
}