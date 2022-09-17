import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import bannerMock from 'components/BannerSlider/mock'
import perfumesMock from 'components/ProductCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import 'match-media-mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newPerfumes: [perfumesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularPerfumes: [perfumesMock[0]],
  upcomingPerfumes: [perfumesMock[0]],
  upcomingHighligth: highlightMock,
  upcomingMorePerfumes: [perfumesMock[0]],
  promotionalPerfumes: [perfumesMock[0]],
  promotionalHighligth: highlightMock
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    expect(screen.getAllByRole('img', { name: /amora/i })).toHaveLength(2)

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcoming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /promotional perfumes/i })
    ).toBeInTheDocument()

    // banner
    expect(screen.getAllByText(/green ocean 1/i)).toHaveLength(1)
    // product card
    expect(screen.getAllByText(/channel/i)).toHaveLength(5)
    // highlight
    expect(screen.getAllByText(/Elyseé is back!/i)).toHaveLength(3)
  })
})
