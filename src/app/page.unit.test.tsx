import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'
 
describe('Page', () => {
  it('renders the <LandingPage />', () => {
    render(<Home />)
 
    const heading = screen.getByRole('main')
 
    expect(heading).toBeInTheDocument()
  })
})