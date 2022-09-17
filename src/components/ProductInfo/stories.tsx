import { Story, Meta } from '@storybook/react/types-6-0'
import ProductInfo, { ProductInfoProps } from '.'
import mockProduct from './mock'

export default {
  title: 'Product/ProductInfo',
  component: ProductInfo,
  parameters: {
    backgrounds: {
      default: 'amora-dark'
    }
  },
  args: mockProduct
} as Meta

export const Default: Story<ProductInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <ProductInfo {...args} />
  </div>
)
