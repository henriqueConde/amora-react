import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import { formatPrice } from 'utils/formatPrice'

import * as S from './styles'

export type ProductInfoProps = {
  title: string
  description: string
  price: number
}

const ProductInfo = ({ title, description, price }: ProductInfoProps) => (
  <S.Wrapper data-cy="product-info">
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{`${formatPrice(price)}`}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default ProductInfo
