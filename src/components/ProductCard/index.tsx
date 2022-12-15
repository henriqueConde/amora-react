import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Link from 'next/link'

import Button from 'components/Button'
import * as S from './styles'
import { formatPrice } from 'utils/formatPrice'

export type ProductCardProps = {
  slug: string
  title: string
  brand: string | null
  img: string
  price: number
  promotionalPrice?: number | null
  favorite?: boolean
  onFav?: () => void
}

const ProductCard = ({
  slug,
  title,
  brand,
  img,
  price,
  promotionalPrice,
  favorite = false,

  onFav
}: ProductCardProps) => (
  <S.Wrapper data-cy="product-card">
    <Link href={`product/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`product/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Brand>{brand}</S.Brand>
        </S.Info>
      </Link>
      <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>
          {(promotionalPrice && formatPrice(promotionalPrice)) ||
            formatPrice(price)}
        </S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default ProductCard
