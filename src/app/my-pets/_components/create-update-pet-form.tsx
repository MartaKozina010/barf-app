"use client"

import {type FC, useEffect} from "react";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form"
import {Input} from "~/components/ui/input"
import {useFormContext} from "react-hook-form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "~/components/ui/select";
import {Checkbox} from "~/components/ui/checkbox";
import {Popover, PopoverContent, PopoverTrigger} from "~/components/ui/popover";
import {Button} from "~/components/ui/button";
import {Calendar} from "~/components/ui/calendar";
import {clsx} from "clsx";
import {CalendarIcon} from "@radix-ui/react-icons"
import {format} from "date-fns"
import {useGetDogBreedsList} from "~/app/_utils";
import {useGetCatBreedsList} from "~/app/_utils/hooks/useGetBreedsListQuery";
import {Species} from '@prisma/client'
import {Pet as FormData} from "~/utils";

export const CreateUpdatePetForm: FC = () => {
    const methods = useFormContext<Partial<FormData>>()
    const selectedSpecies = methods.watch("species")

    const {dogBreedsList} = useGetDogBreedsList(selectedSpecies === "dog")
    const {catBreedsList} = useGetCatBreedsList(selectedSpecies === "cat")

    const breedsList: Record<Species, typeof dogBreedsList> = {
        dog: dogBreedsList,
        cat: catBreedsList
    }

    useEffect(() => {
        if (methods.watch("species") === "dog"
            && dogBreedsList?.map(item => item.name)!.includes(methods.watch("breed")!)) {
            methods.setValue("breed", undefined);
        }
    }, [methods.watch("species")]);

    methods.watch(val => console.log(val))
    return (
        <div className="flex flex-col gap-md">
            <FormField
                control={methods.control}
                name="petName"
                render={({field}) => (
                    <FormItem>
                        <FormLabel required>Pet name</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Beza"/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={methods.control}
                name="species"
                render={({field}) => (
                    <FormItem>
                        <FormLabel required>Species</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select"/>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {Object.values(Species).map(item => <SelectItem
                                    key={item} value={item}>
                                    {item[0]?.toUpperCase() + item.slice(1)}
                                </SelectItem>)}
                            </SelectContent>
                        </Select>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={methods.control}
                name="breed"
                render={({field}) => (
                    <FormItem>
                        <FormLabel required>Breed</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select"/>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {selectedSpecies && breedsList[selectedSpecies]?.map(({name}) => <SelectItem
                                    key={name} value={name}>{name}</SelectItem>)
                                }
                            </SelectContent>
                        </Select>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={methods.control}
                name="weight"
                render={({field}) => (
                    <FormItem>
                        <FormLabel required>Weight [kg]</FormLabel>
                        <FormControl>
                            <Input {...field}
                                   placeholder="16"
                                   onChange={e => field.onChange(e.target.value ? +e.target.value : undefined)}
                                   type="number"
                                   className="[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={methods.control}
                name="percentOfWeight"
                render={({field}) => (
                    <FormItem>
                        <FormLabel required>Percent of weight [%]</FormLabel>
                        <FormControl>
                            <Input {...field}
                                   placeholder="1"
                                   onChange={e => field.onChange(e.target.value ? +e.target.value : undefined)}
                                   type="number"
                                   className="[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={methods.control}
                name="birthdate"
                render={({field}) => (
                    <FormItem className="flex flex-col">
                        <FormLabel>Date of birth</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant="outline"
                                        className={clsx(
                                            "pl-3 text-left font-normal hover:bg-white",
                                            !field.value && "text-muted-foreground"
                                        )}
                                    >
                                        {field.value ? (
                                            format(field.value, "PPP")
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                        date > new Date() || date < new Date("1900-01-01")
                                    }
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={methods.control}
                name="neutered"
                render={({field}) => (
                    <div>
                        <FormLabel>Neutered</FormLabel>
                        <FormItem
                            className="flex flex-row items-start space-x-3 space-y-0 rounded-md border px-4 py-3 shadow mt-sm">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormLabel>Yes</FormLabel>
                        </FormItem>
                    </div>
                )}
            />

        </div>
    )
}





