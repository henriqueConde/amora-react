import { screen } from '@testing-library/react'
import { SessionProvider } from 'next-auth/react'

import productInfoMock from 'components/ProductInfo/mock'
import perfumesMock from 'components/ProductCardSlider/mock'

import Product, { ProductTemplateProps } from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const mockSession = {
  user: { name: 'cintia', email: 'cintiantunes@gmail.com' },
  expires: '2022-10-21T03:21:58.788Z',
  id: 7
}

const props: ProductTemplateProps = {
  cover: 'bg-image.jpg',
  productInfo: productInfoMock,
  description: `<h1>Custom HTML</h1>`,
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
    renderWithTheme(
      <SessionProvider session={mockSession}>
        <Product {...props} />
      </SessionProvider>
    )
    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProductInfo')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(1)
    expect(screen.getByText(/custom html/i)).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
  })

  it('should render the cover image', () => {
    renderWithTheme(
      <SessionProvider session={mockSession}>
        <Product {...props} />
      </SessionProvider>
    )

    const cover = screen.getByRole('image', { name: /cover/i })

    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })
  })
})
