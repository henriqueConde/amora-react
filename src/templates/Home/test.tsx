import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { SessionProvider } from 'next-auth/react'

import bannerMock from 'components/BannerSlider/mock'
import perfumesMock from 'components/ProductCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const mockSession = {
  user: { name: 'cintia', email: 'cintiantunes@gmail.com' },
  expires: '2022-10-21T03:21:58.788Z',
  id: 7
}

const props = {
  data: '',
  banners: bannerMock,
  newProducts: perfumesMock,
  mostPopularHighlight: highlightMock,
  mostPopularProducts: perfumesMock,
  upcomingProducts: perfumesMock,
  upcomingHighlight: highlightMock,
  upcomingMorePerfumes: perfumesMock,
  promotionalPerfumes: perfumesMock,
  promotionalHighlight: highlightMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(
      <SessionProvider session={mockSession}>
        <Home {...props} />
      </SessionProvider>
    )

    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4)
  })
})
