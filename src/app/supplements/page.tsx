'use client'

import {type PetFormSchema} from "~/app/my-pets/_components/create-update-pet-form";
import {type SubmitHandler, useForm} from "react-hook-form";
import {SupplementsForm, type SupplementsFormSchema} from "~/app/supplements/_components/supplements-form";
import {Form} from "~/components/ui/form";

export type FormData = PetFormSchema & SupplementsFormSchema

export default function SupplementsPage() {
    const methods = useForm<FormData>({mode: "onSubmit"})

    const onSubmit: SubmitHandler<FormData> = data => {
        console.log("omega: ", data.omega)
    }
    return (
            <main className="pl-40">
                hello from supplements page
                    <Form {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <SupplementsForm/>
                            <input type="submit"/>
                        </form>
                    </Form>
            </main>
    );
}
