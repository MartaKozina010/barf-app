import {useQuery} from "@tanstack/react-query";

type Breed = {
    id: number,
    name: string,
    image: {
        url: string
    }
}

const API_KEY = process.env.BREEDS_API_KEY

const DOG_BREEDS_LIST_URL = "https://api.thedogapi.com/v1/breeds"

export const useGetDogBreedsList = (enabled?: boolean) => {
    const {data: dogBreedsList, isLoading, error} = useQuery({
            queryKey: ["dogBreeds"],
            queryFn: async (): Promise<Breed[]> => {
                const response = await fetch(DOG_BREEDS_LIST_URL,
                    {
                        headers: {
                            'x-api-key': API_KEY
                        },
                    });
                return await response.json() as Breed[];
            },
            enabled: enabled
        }
    );

    return {dogBreedsList, isLoading, error}
}

const CAT_BREEDS_LIST_URL = "https://api.thecatapi.com/v1/breeds"

export const useGetCatBreedsList = (enabled?: boolean) => {
    const {data: catBreedsList, isLoading, error} = useQuery({
            queryKey: ["catBreeds"],
            queryFn: async (): Promise<Breed[]> => {
                const response = await fetch(CAT_BREEDS_LIST_URL,
                    {
                        headers: {
                            'x-api-key': API_KEY
                        }
                    });
                return await response.json() as Breed[];
            },
            enabled: enabled
        },
    );

    return {catBreedsList, isLoading, error}
}