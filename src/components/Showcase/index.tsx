import ProductCardSlider from 'components/ProductCardSlider'
import Heading from 'components/Heading'
import { ProductCardProps } from 'components/ProductCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  perfumes?: ProductCardProps[]
}

const Showcase = ({ title, highlight, perfumes }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!perfumes && <ProductCardSlider items={perfumes} />}
  </S.Wrapper>
)

export default Showcase
