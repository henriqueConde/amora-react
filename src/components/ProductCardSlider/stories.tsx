import { Story, Meta } from '@storybook/react/types-6-0'

import { ProductCardProps } from 'components/ProductCard'
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

export default {
  title: 'ProductCardSlider',
  component: ProductCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<ProductCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <ProductCardSlider items={args} {...args} />
  </div>
)
