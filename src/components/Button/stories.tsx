import { Story, Meta } from '@storybook/react/types-6-0'
import { Cart } from '@styled-icons/bootstrap/Cart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as unknown as Meta
export const Default: Story = (args) => <Button {...args} />
Default.args = {
  children: 'Buy now'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <Cart />
}
