import { Story, Meta } from '@storybook/react/types-6-0'

import { ProductCardProps } from 'components/ProductCard'
import ProductCardSlider from '.'
import items from './mock'

export default {
  title: 'ProductCardSlider',
  component: ProductCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'aroma-dark'
    }
  }
} as Meta

export const Default: Story<ProductCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <ProductCardSlider items={args} {...args} />
  </div>
)
