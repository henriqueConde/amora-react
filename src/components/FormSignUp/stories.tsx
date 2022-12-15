import { Story, Meta } from '@storybook/react'
import FormSignUp from '.'
import { MockedProvider } from '@apollo/client/testing'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as Meta

export const Default: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <MockedProvider>
      <FormSignUp />
    </MockedProvider>
  </div>
)
