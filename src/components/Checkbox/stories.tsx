import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'amora-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Aromatic"
        labelFor="aromatic"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Oriental"
        labelFor="oriental"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox name="category" label="Citric" labelFor="citric" {...args} />
    </div>
  </>
)
