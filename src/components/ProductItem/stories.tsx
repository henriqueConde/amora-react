import { Story, Meta } from '@storybook/react/types-6-0'
import ProductItem, { ProductItemProps } from '.'

export default {
  title: 'ProductItem',
  component: ProductItem,
  args: {
    img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Chanel Ocean Green',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<ProductItemProps> = (args) => (
  <ProductItem {...args} />
)

export const WithPayment: Story<ProductItemProps> = (args) => (
  <ProductItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://amora/product/download/2131245465nhtsa',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}
