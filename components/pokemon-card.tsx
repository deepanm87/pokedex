import Image from "next/image"
import { PokemonCardProps } from "@/utils/types"
import { colorTypes } from "@/utils/colortypes"

export default function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <div className="p-4">
                <div className="relactive aspect-square mb-4">
                    <Image 
                        src={pokemon.imageUrl}
                        alt={pokemon.name}
                        className="w-full h-full object-contain"
                        width={250}
                        height={250}
                    />
                </div>
                <div className="text-center">
                    <p className="text-gray-500 text-sm mb-1">
                        #{String(pokemon.id).padStart(3, '0')}
                    </p>
                    <h2 className="text-black text-xl font-bold capitalize mb-3">{pokemon.name}</h2>
                    <div>
                        { pokemon.types.map( type => (
                            <span
                                key={type}
                                className={`px-3 py-1 mr-2 rounded-full text-white text-sm capitalize ${colorTypes[type as keyof typeof colorTypes]}`}
                            >
                            {type}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}