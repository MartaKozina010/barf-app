'use client'

import {type FC} from "react";
import {Card} from "~/components/ui/card";
import {CreateNewPetModal} from "~/app/my-pets/_components/create-new-pet-modal";
import {useGetPetsList} from "~/app/_utils";

export const AddNewPet: FC = () => {
    const {petsList, isLoading} = useGetPetsList()

    return (
        <>
            {!isLoading && petsList?.length ? <div className="flex justify-end"><CreateNewPetModal/></div> : null}
            {!isLoading && !petsList?.length ? (<Card className="p-lg flex flex-col gap-xxl items-center text-center">
                <div>
                    <h3>You do not have any saved pets.</h3>
                    <p>Click the button below to add new.</p>
                </div>
                <CreateNewPetModal/>
            </Card>) : null}
        </>
    )
}