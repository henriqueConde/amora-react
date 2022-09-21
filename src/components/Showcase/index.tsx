import ProductCardSlider from 'components/ProductCardSlider'
import Heading from 'components/Heading'
import { ProductCardProps } from 'components/ProductCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  products?: ProductCardProps[]
}

const Showcase = ({ title, highlight, products }: ShowcaseProps) => (
  <S.Wrapper data-cy={title || 'showcase'}>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!products && <ProductCardSlider items={products} />}
  </S.Wrapper>
)

export default Showcase
