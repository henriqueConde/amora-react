import { Story, Meta } from '@storybook/react'
import Showcase, { ShowcaseProps } from '.'
import highlightMock from 'components/Highlight/mock'
import perfumesMock from 'components/ProductCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'amora-dark'
    }
  }
} as Meta

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  products: perfumesMock
}

export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutHighlight.args = {
  title: 'Most Popular',
  products: perfumesMock
}

export const Withoutperfumes: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

Withoutperfumes.args = {
  title: 'Most Popular',
  highlight: highlightMock
}
