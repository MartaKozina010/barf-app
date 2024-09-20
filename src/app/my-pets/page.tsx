import {PetsList, CreateNewPet} from "~/app/my-pets/_components";

export default function MyPetsPage() {

    return (
        <div className="pl-40">
            <CreateNewPet/>
            <PetsList/>
        </div>
    );
}
