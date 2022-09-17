import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByRole('img', { name: /amora/i })).toHaveLength(2)

    expect(
      screen.getByRole('heading', {
        name: /With much love you find here carefully curated perfumes/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Amora is the best perfume store in the planet/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /auth title/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
