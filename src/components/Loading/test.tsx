import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Loading from '.'

describe('<Loading />', () => {
  it('should render with the light color', () => {
    renderWithTheme(<Loading />)
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
    expect(screen.getByTestId('loading-spinner')).toHaveStyleRule(
      'border',
      '32px solid #FAFAFA',
      {
        modifier: '::after'
      }
    )
  })

  it('should render with the dark color', () => {
    renderWithTheme(<Loading color="black" />)
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
    expect(screen.getByTestId('loading-spinner')).toHaveStyleRule(
      'border',
      '32px solid #030517',
      {
        modifier: '::after'
      }
    )
  })
})
