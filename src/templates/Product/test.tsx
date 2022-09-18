import { screen } from '@testing-library/react'

import productInfoMock from 'components/ProductInfo/mock'
import perfumesMock from 'components/ProductCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Product, { ProductTemplateProps } from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { HighlightProps } from 'components/Highlight'

const props: ProductTemplateProps = {
  cover: 'bg-image.jpg',
  productInfo: productInfoMock,
  description: `<h1>Custom HTML</h1>`,
  upcomingProducts: perfumesMock,
  promotionalHighLight: highlightMock as HighlightProps,
  recommendedProducts: perfumesMock
}

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

jest.mock('components/ProductInfo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProductInfo" />
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

jest.mock('components/Footer', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Footer" />
  }
}))

describe('<Product />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Product {...props} />)
    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProductInfo')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)
    expect(screen.getByText(/custom html/i)).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
  })

  it('should render the cover image', () => {
    renderWithTheme(<Product {...props} />)

    const cover = screen.getByRole('image', { name: /cover/i })

    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
