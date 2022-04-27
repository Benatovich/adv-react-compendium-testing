import PropTypes from 'prop-types'
import Pokemon from './Pokemon'

export default function PokeList({ pokemons }) {
    return (
        <ul aria-label='pokeList' className='pokeList'>
            {pokemons.map((pokemon) => {
                return (
                    <li className='listItem' key={pokemon.id}>
                        <Pokemon pokemon={pokemon} />
                    </li>
                )
            })}
        </ul>
    )
}

PokeList.PropTypes = {
    pokemons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            abilityOne: PropTypes.string.isRequired,
            abilityTwo: PropTypes.string.isRequired,
            typeOne: PropTypes.string.isRequired,
            typeTwo: PropTypes.string.isRequired,
            pic: PropTypes.string.isRequired,
            generation: PropTypes.string.isRequired,
        })
    ).isRequired,
}