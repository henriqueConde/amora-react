import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a black heading by default', () => {
    renderWithTheme(<Heading>amora</Heading>)
    expect(screen.getByRole('heading', { name: /amora/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a white heading when color is passed', () => {
    renderWithTheme(<Heading color="white">amora</Heading>)
    expect(screen.getByRole('heading', { name: /amora/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>amora</Heading>)
    expect(screen.getByRole('heading', { name: /amora/i })).toHaveStyle({
      'border-left': '0.7rem solid #038FC9'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>amora</Heading>)
    expect(screen.getByRole('heading', { name: /amora/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #038FC9',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">amora</Heading>)
    expect(screen.getByRole('heading', { name: /amora/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /amora/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">amora</Heading>)

    expect(screen.getByRole('heading', { name: /amora/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #038FC9' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #038FC9', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #03BDC9' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #03BDC9', {
      modifier: '::after'
    })
  })
})
