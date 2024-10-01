'use client';

import {type FC} from "react";
import {Card} from "~/components/ui/card";
import {EditPetDetailsModal} from "~/app/my-pets/_components/edit-pet-details-modal";
import {useGetPetsList} from "~/app/_utils";

export const PetsList: FC = () => {
    const {petsList, isLoading} = useGetPetsList()

    return (
        <div className="flex flex-col gap-md">
            {isLoading && <div>Loading...</div>}
            {petsList?.length ? <h3>Your pets</h3> : null}
            {petsList?.map((pet) => <Card key={pet.id} className="p-lg">
                <div>ID: {pet.id}</div>
                <div>name: {pet.petName}</div>
                <EditPetDetailsModal {...pet} />
            </Card>)}
        </div>
    )
}