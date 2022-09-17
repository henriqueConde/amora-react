import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Slider, { SliderSettings } from 'components/Slider'
import ProductCard, { ProductCardProps } from 'components/ProductCard'

import * as S from './styles'

const screenSizes = {
  huge: 1375,
  large: 1024,
  medium: 570,
  small: 375
}

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: screenSizes.huge,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: screenSizes.large,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: screenSizes.medium,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: screenSizes.small,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next perfumes" />,
  prevArrow: <ArrowLeft aria-label="previous perfumes" />
}

export type ProductCardSliderProps = {
  items: ProductCardProps[]
  color?: 'white' | 'black'
}

const ProductCardSlider = ({
  items,
  color = 'white'
}: ProductCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default ProductCardSlider
