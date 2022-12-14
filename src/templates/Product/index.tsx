import Base from 'templates/Base'

import ProductInfo, { ProductInfoProps } from 'components/ProductInfo'
import TextContent from 'components/TextContent'
import { ProductCardProps } from 'components/ProductCard'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type ProductTemplateProps = {
  cover: string
  productInfo: ProductInfoProps
  description: string
  recommendedProducts: ProductCardProps[]
}

const Product = ({
  cover,
  productInfo,
  description,
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
        title="You may like this products"
        products={recommendedProducts}
      />
    </S.Main>
  </Base>
)

export default Product
