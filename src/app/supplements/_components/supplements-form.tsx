"use client"

import {type FC} from "react";
import {z} from "zod"
import {useFormContext} from "react-hook-form";
import {
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form"
import {Input} from "~/components/ui/input"
import {Button} from "~/components/ui/button";

const supplementsFormSchema = z.object({
    omega: z.string().min(2, {message: "Must be at least 2 letter"}).max(50),
})
export type SupplementsFormSchema = z.infer<typeof supplementsFormSchema>

export const SupplementsForm: FC = () => {
    const supplementsForm = useFormContext<SupplementsFormSchema>()


    return (
            <div className="space-y-8">
                <FormItem>
                    <FormLabel>Omega</FormLabel>
                    <Input placeholder="Omega" {...supplementsForm.register("omega")} />
                    <FormMessage/>
                </FormItem>
                <Button>OK</Button>
            </div>
    )
}





