import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import SearchForm from '../src/components/Forms/SearchForm'
import Compendium from './views/Compendium'


describe('pokesearch behavioral test', () => {
    it('renders blastoise when a user searches for blastoise', async () => {
        render(<Compendium />)
        
        const search = await screen.findByLabelText('searchFormInput')
        act(() => {
            // console.log('!!search', search)
            userEvent.type(search, 'blastoise')

        })

        waitFor
        await screen.findAllByText(/water/i)
    })
})