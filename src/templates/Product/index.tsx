import Base from 'templates/Base'

import ProductInfo, { ProductInfoProps } from 'components/ProductInfo'
import TextContent from 'components/TextContent'
import { HighlightProps } from 'components/Highlight'
import { ProductCardProps } from 'components/ProductCard'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type ProductTemplateProps = {
  cover: string
  productInfo: ProductInfoProps
  description: string
  upcomingProducts: ProductCardProps[]
  promotionalHighLight: HighlightProps
  recommendedProducts: ProductCardProps[]
}

const Product = ({
  cover,
  productInfo,
  description,
  upcomingProducts,
  promotionalHighLight,
  recommendedProducts
}: ProductTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionProductInfo>
        <ProductInfo {...productInfo} />
      </S.SectionProductInfo>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <Showcase
        title="Upcoming"
        products={upcomingProducts}
        highlight={promotionalHighLight}
      />

      <Showcase
        title="You may like this products"
        products={recommendedProducts}
      />
    </S.Main>
  </Base>
)

export default Product
