import { render, screen } from '@testing-library/react'
import Compendium from './Compendium'

describe('compendium item display test suite', () => {
    it('renders a list of my favorite pokemon with images', async () => {
        render(<Compendium />)

        const squirtle = await screen.findByAltText(/squirtle\-first generation/i);
        const cubone = await screen.findByAltText(/cubone\-first generation/i);
        const farfetchd = await screen.findByAltText(/farfetchd\-first generation/i);
        const drowzee = await screen.findByAltText(/drowzee\-first generation/i);
        const gengar = await screen.findByAltText(/gengar\-first generation/i);
        const raticate = await screen.findByAltText(/raticate\-first generation/i);
        const ditto = await screen.findByAltText(/ditto\-first generation/i);
        const cyndaquil = await screen.findByAltText(/cyndaquil\-second generation/i);
        const miltank = await screen.findByAltText(/miltank\-second generation/i);
        const tyranitar = await screen.findByAltText(/tyranitar\-second generation/i);

        expect(squirtle.src).toEqual('https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png')
        expect(cubone.src).toEqual('https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png')
        expect(farfetchd.src).toEqual('https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png')
        expect(drowzee.src).toEqual('https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png')
        expect(gengar.src).toEqual('https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png')
        expect(raticate.src).toEqual('https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png')
        expect(ditto.src).toEqual('https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png')
        expect(cyndaquil.src).toEqual('https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png')
        expect(miltank.src).toEqual('https://assets.pokemon.com/assets/cms2/img/pokedex/full/241.png')
        expect(tyranitar.src).toEqual('https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png')
    })
})