import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import ProductInfo from '.'
const props = {
  title: 'My Product Title',
  description: 'Product Description',
  price: 215
}

describe('<ProductInfo />', () => {
  it('should render product informations', () => {
    const { container } = renderWithTheme(<ProductInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /my product title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/product description/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<ProductInfo {...props} />)
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
