import { Story, Meta } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Deep Blue Dive',
    subtitle: '<p>Experience the new <strong>Blue Wave</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/perfume/deep-blue-dive'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)
