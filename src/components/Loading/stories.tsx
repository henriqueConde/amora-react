import { Story, Meta } from '@storybook/react'
import Loading, { LoadingProps } from '.'

export default {
  title: 'Loading',
  component: Loading,
  args: {
    color: 'white'
  }
} as Meta

export const Default: Story = (args: LoadingProps) => <Loading {...args} />
