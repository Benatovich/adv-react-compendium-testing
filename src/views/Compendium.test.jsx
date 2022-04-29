import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Compendium from './Compendium'

describe('compendium item display test suite', () => {
    it.only('renders a list of pokemon with images', async () => {
        render(<Compendium />)

        const img = await screen.findAllByLabelText('pokepic')

        expect(img).toStrictEqual(expect.arrayContaining([]))
    })
})