import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProductCardSlider from '.'

const items = [
  {
    title: 'Channel',
    brand: 'French Vibes',
    img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Channel',
    brand: 'French Vibes',
    img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Channel',
    brand: 'French Vibes',
    img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Channel',
    brand: 'French Vibes',
    img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Channel',
    brand: 'French Vibes',
    img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

describe('<perfumeslider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<ProductCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<ProductCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous perfumes/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next perfumes/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
