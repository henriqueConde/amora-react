import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import perfumesMock from 'components/ProductCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Showcase from '.'

const props = {
  title: 'Most Popular',
  highlight: highlightMock,
  products: perfumesMock.slice(0, 1)
}

describe('<Showcase />', () => {
  it('should render full showcase', () => {
    renderWithTheme(<Showcase {...props} />)

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: perfumesMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(
      <Showcase products={props.products} highlight={props.highlight} />
    )

    screen.getByRole('heading', { name: highlightMock.title })
    screen.getByRole('heading', { name: perfumesMock[0].title })

    expect(
      screen.queryByRole('heading', { name: /most popular/i })
    ).not.toBeInTheDocument()
  })

  it('should render without highlight', () => {
    renderWithTheme(<Showcase title={props.title} products={props.products} />)

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: perfumesMock[0].title })

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()
  })

  it('should render without perfumes', () => {
    renderWithTheme(
      <Showcase title={props.title} highlight={props.highlight} />
    )

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: highlightMock.title })

    expect(
      screen.queryByRole('heading', { name: perfumesMock[0].title })
    ).not.toBeInTheDocument()
  })
})
