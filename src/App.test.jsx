import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import Compendium from './views/Compendium'
import App from './App'
import { MemoryRouter } from 'react-router-dom'


describe('pokesearch behavioral test', () => {
    it('renders wartortle when a user searches for war', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        const search = await screen.findByAltText(/search input box/i);
        userEvent.type(search, 'war');

        const button = await screen.findByRole('button');
        userEvent.click(button);

        const loading = await screen.findByAltText(/rocking pokeball/i);
        waitForElementToBeRemoved(loading);

        const img = await screen.findByAltText(/wartortle\-first generation/i);
        expect(img.src).toEqual('https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png')
    })
})
