export interface SearchInputProps {
    onSearch: (search: string) => void
}

export interface Pokemon {
    id: number
    name: string
    types: string[]
    imageUrl: string
}

export interface PokemonCardProps {
    pokemon: {
        id: number
        name: string
        types: string[]
        imageUrl: string
    }
}