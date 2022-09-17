import Banner, { BannerProps } from 'components/Banner'
import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

export type BannerSliderProps = {
  items: BannerProps[]
}

const largeScreen = 1770

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: largeScreen,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => {
        return <Banner key={item.title} {...item} />
      })}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
