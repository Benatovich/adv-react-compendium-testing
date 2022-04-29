import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Compendium from './Compendium'

describe('compendium item display test suite', () => {
    it('renders a list of pokemon with images', async () => {
        render(<Compendium />)

        const img = await screen.findAllByLabelText('pokepic')
        // await screen.getByText(/fire/i)

        expect(img).toStrictEqual(expect.arrayContaining([]))
    })
})

// describe('pokesearch behavioral test', () => {
//     it('renders blastoise when a user searches for blastoise', async () => {
//         render(<Compendium />)
        
//         const search = screen.getByLabelText('searchFormInput')
//         userEvent.type(search, 'blastoise')
//         waitFor
//         await screen.findByText(/water type/i)
//     })
// })