import { Story, Meta } from '@storybook/react'

import ProductCard, { ProductCardProps } from '.'

export default {
  title: 'Product/ProductCard',
  component: ProductCard,
  args: {
    title: 'Green Ocean',
    brand: 'Boticario',
    img: 'https://images.unsplash.com/photo-1458538977777-0549b2370168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
    price: 'R$ 235,00',
    promotionalPrice: 215,
    slug: 'green-ocean'
  },
  argTypes: {
    onFav: { action: 'clicked' }
  }
} as Meta

export const Default: Story<ProductCardProps> = (args: ProductCardProps) => (
  <div style={{ width: '30rem' }}>
    <ProductCard {...args} />
  </div>
)
